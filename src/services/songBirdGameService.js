import birdsData from "../data/birds";
import {Utils} from './utils';

export class SongBirdGameService {
  constructor() {
    this.birdsData = this.getData();
  }
  static getData() {
    return birdsData;
  }
  
  static getGuessedIndex(step) {
    return Utils.randomInteger(0, this.birdsData[step].length);
  }
}
