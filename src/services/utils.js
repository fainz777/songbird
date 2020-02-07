export class Utils {
  static randomInteger(min, max) {
    let rand = min + Math.random() * (max - min)
    rand = parseInt(rand);
    return rand;
  }
}
