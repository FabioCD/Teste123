import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-teste-selecao',
  templateUrl: './teste-selecao.component.html',
  styleUrls: ['./teste-selecao.component.css']
})
export class TesteSelecaoComponent implements OnInit {

  lista: Pessoa[] = [];
  objPessoaSel = new Pessoa();

  constructor(private api: PessoaService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.api.consultar()
    .toPromise()
    .then
    (res => {
      this.lista = res;
    });
  }

  atribuir(id) {
      this.objPessoaSel.id = id;
      console.log(`Pessoa: ${this.objPessoaSel.id}`);
  }

}
