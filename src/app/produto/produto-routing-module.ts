import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCadastro } from './produto-cadastro/produto-cadastro';
import { ProdutoListagem } from './produto-listagem/produto-listagem';

const routes: Routes = [
  {
    path: 'produto-listagem',
    component: ProdutoListagem
  },
  {
    path: 'produto-cadastro',
    component: ProdutoCadastro
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
