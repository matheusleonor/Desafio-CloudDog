import { Categoria } from './categoria';

export interface Produto {
    id: number;
    titulo: string;
    descricao: string;
    preco: number;
    categoria: Categoria;
}