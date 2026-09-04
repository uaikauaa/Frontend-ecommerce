import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  styleUrl: './ex10.scss',
  templateUrl: './ex10.html',
})
export class Ex10 {
  usuario = '';
  senha = '';
  mensagem = '';

  get podeEntrar(): boolean {
    return this.usuario.trim() !== '' && this.senha.trim() !== '';
  }

  entrar() {
    if (this.podeEntrar) {
      this.mensagem = `Bem-vindo, ${this.usuario}!`;
    }
  }
}
