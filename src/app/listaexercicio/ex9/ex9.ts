import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  styleUrl: './ex9.scss',
  templateUrl: './ex9.html',
})
export class Ex9 {
  nomeProduto = 'Mouse Gamer';
  estoque = 0;

  aumentar() {
    this.estoque++;
  }

  diminuir() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}
