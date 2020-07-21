const { setWorldConstructor } = require('cucumber');

export class World {
  private attach: (buffer: Buffer, mimeType: string) => void;
  constructor({ attach }) {
    this.attach = attach;
  }
}