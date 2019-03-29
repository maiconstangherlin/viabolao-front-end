import { Component, OnInit } from '@angular/core';
import { ClassificacaoService } from './classificacao.service';
import { Classificacao } from './classificacao';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent implements OnInit {

  classificacao: Classificacao;

  constructor(private classificacaoService: ClassificacaoService) { }

  ngOnInit() {
    this.classificacaoService.get().subscribe((clas) => {
      this.classificacao = clas;
    });
  }
}
