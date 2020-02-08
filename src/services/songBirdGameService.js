import birdsData from "../data/birds";
import {Utils} from './utils';

export class SongBirdGameService {
  constructor() {
  }

  static getData() {
    return birdsData;
  }

  static getGuessedIndex(birdsData, step) {
    return Utils.randomInteger(0, birdsData[step].length);
  }

  static isAnswerCorrect(answer, i) {

  }
}
