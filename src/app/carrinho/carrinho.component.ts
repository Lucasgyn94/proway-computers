import { Component, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../produtos';
import { CarrinhoService } from '../carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal(); 
  }
  // criando metodo para calcular total carrinho
  calcularTotal() {
    this.total = this.itensCarrinho.reduce((anterior, atual) => anterior + (atual.preco * atual.quantidade), 0);
  }

  // implementando método de remover produto carrinho com atualização

  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }
  
  comprar() {
    alert("Parabéns, você finalizou a sua compra.");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);    
  }

}
