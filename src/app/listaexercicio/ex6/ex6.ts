import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  styleUrl: './ex6.scss',
  templateUrl: './ex6.html',
})
export class Ex6 {
  quantidade = 0;

  incrementar() {
    this.quantidade++;
  }

  decrementar() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
