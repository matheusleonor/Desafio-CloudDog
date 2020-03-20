import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  Categoria = {} as Categoria;
  Categorias: Categoria[];

  constructor(private CategoriaService: CategoriaService) {}
  
  ngOnInit() {
    this.getCategorias();
  }

  // defini se um Categoria será criado ou atualizado
  saveCategoria(form: NgForm) {
    if (this.Categoria.id !== undefined) {
      this.CategoriaService.updateCategoria(this.Categoria).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.CategoriaService.saveCategoria(this.Categoria).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os Categorias
  getCategorias() {
    this.CategoriaService.getCategorias().subscribe((Categorias: Categoria[]) => {
      this.Categorias = Categorias;
    });
  }

  // deleta um Categoria
  deleteCategoria(Categoria: Categoria) {
    this.CategoriaService.deleteCategoria(Categoria).subscribe(() => {
      this.getCategorias();
    });
  }

  // copia o Categoria para ser editado.
  editCategoria(Categoria: Categoria) {
    this.Categoria = { ...Categoria };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCategorias();
    form.resetForm();
    this.Categoria = {} as Categoria;
  }

}