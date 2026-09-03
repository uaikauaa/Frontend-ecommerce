import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing-module';
import { ProdutoListagem } from './produto-listagem/produto-listagem';
import { ProdutoCadastro } from './produto-cadastro/produto-cadastro';

@NgModule({
  declarations: [ProdutoListagem, ProdutoCadastro],
  imports: [CommonModule, ProdutoRoutingModule],
})
export class ProdutoModule {}
