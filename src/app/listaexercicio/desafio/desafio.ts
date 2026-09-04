import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio',
  standalone: false,
  styleUrl: './desafio.scss',
  templateUrl: './desafio.html',
})
export class Desafio {
  nomeAluno = '';
  disciplinas = 1;
  mensagem = '';

  get podeMatricular(): boolean {
    return this.nomeAluno.trim() !== '';
  }

  aumentarDisciplinas() {
    this.disciplinas++;
  }

  diminuirDisciplinas() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem = `Matrícula realizada! Aluno: ${this.nomeAluno}, Disciplinas: ${this.disciplinas}.`;
  }
}
