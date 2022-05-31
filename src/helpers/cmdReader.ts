export class CMDReader {
  private process: any;
  constructor(process: any) {
    this.process = process;
  }
  getInputPath(): string {
    return this.process.argv[3];
  }
  getOutoutPath(): string {
    return this.process.argv[5];
  }
}
