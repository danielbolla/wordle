import { Component, HostListener } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public game: GameService
  ) {}

  @HostListener('document:keydown.enter') 
  enterPressed() {
    this.game.sendGuess();
  }

  @HostListener('document:keydown.backspace')
  backspacePressed() {
    this.game.currentGuess = applyBackspace(this.game.currentGuess);
  }

  @HostListener('document:keydown', ['$event'])
  letterPressed(event: KeyboardEvent) {
    if (!isLetter(event.key)) return;
    if (this.game.currentGuess.length == 5) return;
    if (this.game.guesses.length == 6) return;
    this.game.currentGuess += event.key;
  }
  
}


function isLetter(key: string) {
  return /^[a-zA-Z]$/.test(key);
}

function applyBackspace(text: string) {
  if (text == '') return '';
  return text.slice(0, -1);
}