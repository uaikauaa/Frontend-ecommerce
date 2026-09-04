import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  standalone: false,
  styleUrl: './ex8.scss',
  templateUrl: './ex8.html',
})
export class Ex8 {
  produto = '';
  preco = 0;
  quantidade = 0;

  get total(): number {
    return this.preco * this.quantidade;
  }
}
