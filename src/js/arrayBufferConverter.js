export default class ArrayBufferConverter {
  load(buffer) { // может загружать данные
    this.buffer = buffer;
  }

  toString() { // умеет переводить содержимое загруженного ArrayBuffer в строку
    const newData = new Uint16Array(this.buffer);
    return String.fromCharCode(...newData);
  }
}
