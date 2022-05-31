export class FileWriter implements Writer {
  private fs: any;
  constructor(fs: any) {
    this.fs = fs;
  }
  write(filename: string, data: any) {
    this.fs.writeFile(filename, data, (err: Error) => {
      if (err) {
        return err;
      }
    });
  }
}
