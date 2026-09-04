import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  standalone: false,
  styleUrl: './ex5.scss',
  templateUrl: './ex5.html',
})
export class Ex5 {
  curtidas = 0;

  curtir() {
    this.curtidas++;
  }
}
