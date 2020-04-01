import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto';
import { NgForm } from '@angular/forms';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto = {} as Produto;
  produtos: Produto[];

  Categoria = {} as Categoria;
  Categorias: Categoria[];

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService) {}
  
  
  ngOnInit() {
    this.getProdutos();
    this.getCategorias();
  }

  // defini se um produto será criado ou atualizado
  saveProduto(form: NgForm) {
    if (this.produto.id !== undefined) {
      this.produtoService.updateProduto(this.produto).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.produtoService.saveProduto(this.produto).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os produtos
  getProdutos() {
    this.produtoService.getProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });
  }

  // deleta um produto
  deleteProduto(produto: Produto) {
    this.produtoService.deleteProduto(produto).subscribe(() => {
      this.getProdutos();
    });
  }

  // copia o produto para ser editado.
  editProduto(produto: Produto) {
    this.produto = { ...produto };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getProdutos();
    form.resetForm();
    this.produto = {} as Produto;
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((Categorias: Categoria[]) => {
      this.Categorias = Categorias;
    });
  }

}