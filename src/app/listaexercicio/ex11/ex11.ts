import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  styleUrl: './ex11.scss',
  templateUrl: './ex11.html',
})
export class Ex11 {
  nomeProduto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  get total(): number {
    return this.preco * this.quantidade;
  }

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho() {
    this.mensagem = `${this.quantidade}x ${this.nomeProduto} adicionado(s) ao carrinho!`;
  }
}
