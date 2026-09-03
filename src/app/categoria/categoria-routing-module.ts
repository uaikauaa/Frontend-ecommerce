import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListagem } from './categoria-listagem/categoria-listagem';

const routes: Routes = [
  {
    path: 'categoria-listagem',
    component: CategoriaListagem
  },
  {
    path: 'categoria-cadastro',
    component: CategoriaListagem
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaRoutingModule {}
