import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  standalone: false,
  styleUrl: './ex2.scss',
  templateUrl: './ex2.html',
})
export class Ex2 {
  produto = 'Teclado';
  preco = 150;
  quantidade = 3;
}
