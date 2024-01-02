import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

 // Propriedade para armazenar os itens do carrinho (inicialmente um array vazio)
 itens: IProdutoCarrinho[] = [];

 constructor() { }

 // Método para obter os dados do carrinho do armazenamento local
 obtemCarrinho() {
   // Recupera os dados do carrinho do localStorage e os converte de volta para um objeto
   //const carrinho = JSON.parse(localStorage.getItem("carrinho") || "");
   this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
   // Retorna os dados do carrinho
   return this.itens;
   
 }

 // Método para adicionar um produto ao carrinho
 adicionarAoCarrinho(produto: IProdutoCarrinho) {
   // Adiciona o produto ao array de itens do carrinho
   this.itens.push(produto);
   // Atualiza os dados do carrinho no localStorage convertendo o array para uma string JSON
   localStorage.setItem("carrinho", JSON.stringify(this.itens));
 }

 removerProdutoCarrinho(produtoId: number) {
   this.itens = this.itens.filter(item => item.id !== produtoId);
   localStorage.setItem("carrinho", JSON.stringify(this.itens));
 }

 // Método para limpar o carrinho
 limparCarrinho() {
   // Define o array de itens como vazio
   this.itens = [];
   // Limpa todos os dados no localStorage
   localStorage.clear();
 }
}
