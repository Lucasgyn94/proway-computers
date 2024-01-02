import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  descricao = "";

  constructor(
    private router: Router
  ) {
    // Inscreva-se no evento de início de navegação para limpar a descrição ao iniciar a navegação
    /*
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.descricao = "";
      }
    });
    */
  }

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], {queryParams: {descricao: this.descricao}})
      return;
    }

    this.router.navigate(["produtos"]);
  }

  ngOnInit(): void {
  }

}
