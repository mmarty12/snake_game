export default class Canvas {
  constructor(container) {
    this.element = document.createElement('canvas');
    this.context = this.element.getContext('2d'); //returns a drawing context on the canvas
    this.element.width = 320;
    this.element.height = 400;

    container.appendChild(this.element);
  }
}
