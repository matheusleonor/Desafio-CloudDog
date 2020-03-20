import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Categoria } from '../models/categoria'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = 'http://localhost:3000/Categorias'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os Categorias
  getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um Categoria pelo id
  getCategoriaById(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um Categoria
  saveCategoria(Categoria: Categoria): Observable<Categoria> {
    return this.httpClient.post<Categoria>(this.url, JSON.stringify(Categoria), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um Categoria
  updateCategoria(Categoria: Categoria): Observable<Categoria> {
    return this.httpClient.put<Categoria>(this.url + '/' + Categoria.id, JSON.stringify(Categoria), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um Categoria
  deleteCategoria(Categoria: Categoria) {
    return this.httpClient.delete<Categoria>(this.url + '/' + Categoria.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
