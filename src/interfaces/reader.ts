interface Reader {
  read(filePath: string): Promise<string>;
}
