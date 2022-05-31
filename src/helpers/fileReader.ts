export class FileReader implements Reader {
  private fs: any;
  constructor(fs: any) {
    this.fs = fs;
  }
  read(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.fs.readFile(filePath, 'utf-8', (err: any, data: string) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }
}
