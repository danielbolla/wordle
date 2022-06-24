import { Injectable } from '@angular/core';

export const WORD_LENGTH = 5;
export const MAX_GUESS_COUNT = 6;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  solution: string = 'world';
  currentGuess: string = '';
  guesses: string[] = [];

  sendGuess() {
    if (this.currentGuess.length != WORD_LENGTH) return;
    if (this.guesses.length == MAX_GUESS_COUNT) return;
    this.guesses.push(this.currentGuess);
    this.currentGuess = '';
  }

}
