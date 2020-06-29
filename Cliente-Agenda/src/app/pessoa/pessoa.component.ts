import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  lista: Pessoa[] = [];
  obj: Pessoa = new Pessoa();
  mens = '';

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

  adicionar() {
    this.api.adicionar(this.obj)
      .toPromise()
      .then(pessoa => {
          this.mens = pessoa.nome + " foi adicionado(a) com sucesso!";
          this.consultar();
      });
  }

  excluir() {
    this.api.excluir(this.obj.id)
      .toPromise()
      .then(pessoa => {
        this.mens = "Pessoa excluída com sucesso";
        this.consultar();
      });
  }

  alterar() {
    this.api.alterar(this.obj.id, this.obj)
      .toPromise()
      .then(pessoa => {
          this.mens = pessoa.nome + " alterado(a) com sucesso";
          this.consultar();
      });
  }

  carregarDados(p: Pessoa) {
    this.obj = p;
  }

}

