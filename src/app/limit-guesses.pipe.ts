import { Pipe, PipeTransform } from '@angular/core';
import { GameService } from './game.service';

@Pipe({
  name: 'limitGuesses',
  pure: false
})
export class LimitGuessesPipe implements PipeTransform {

  constructor(
    private game: GameService
  ) {}

  transform(guesses: string[], limit: number): string[] {
    if (guesses.length == limit) return guesses;
    const missingGuessCount = limit - guesses.length - 1;
    return [
      ...guesses,
      this.game.currentGuess,
      ...emptyStringArray(missingGuessCount)
    ];
  }

}

function emptyStringArray(length: number): string[] {
  return new Array(length).fill('');
}
