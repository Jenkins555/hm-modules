import {
  Game, GameSavingData, readGameSaving as saveGame, writeGameSaving as loadGame,
} from './game';
/// console.log('app worked');
const game = new Game();
game.start();
