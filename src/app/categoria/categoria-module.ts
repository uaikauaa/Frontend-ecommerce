import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing-module';
import { CategoriaListagem } from './categoria-listagem/categoria-listagem';
import { CategoriaCadastro } from './categoria-cadastro/categoria-cadastro';

@NgModule({
  declarations: [CategoriaListagem, CategoriaCadastro],
  imports: [CommonModule, CategoriaRoutingModule],
})
export class CategoriaModule {}
