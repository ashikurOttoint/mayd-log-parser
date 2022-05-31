export class TextParser implements Parser {
  private regex =
    /(?<timestamp>\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))\s\-\s(?<loglevel>\w+)\s-\s(?<details>.*)/;

  isoToUnix = (iso: string): number => new Date(iso).getTime();

  jsonParser = (str: string, returnVal: string): string => JSON.parse(str)[returnVal];

  parse(text: string): any {
    const result = text.split(/\r?\n/);
    const errorArray = result.filter((item) => item.search('- error -') > -1);
    const sortedArray = errorArray.map((item) => item.match(this.regex));

    return sortedArray.map((item) => {
      const details = item?.groups?.details || '';
      return {
        timestamp: this.isoToUnix(item?.groups?.timestamp || ''),
        loglevel: item?.groups?.loglevel,
        transactionId: this.jsonParser(details, 'transactionId'),
        err: this.jsonParser(details, 'err'),
      };
    });
  }
}
