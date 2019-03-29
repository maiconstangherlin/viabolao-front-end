import { Component, OnInit } from '@angular/core';
import { ClassificacaoService } from '../classificacao.service';

@Component({
  selector: 'app-grid-classificacao',
  templateUrl: './grid-classificacao.component.html',
  styleUrls: ['./grid-classificacao.component.css']
})
export class GridClassificacaoComponent implements OnInit {

  cols: any[];
  ranking: any[];

  constructor(private classificacaoService: ClassificacaoService) { }

  ngOnInit() {
    this.classificacaoService.get().subscribe((cla) => {
      this.ranking = cla.ranking

      for(let _i = 0; _i < this.ranking.length; _i++){
        this.ranking[_i].posicao = _i + 1;
      }
  
      console.log(this.ranking);   
    });

    this.cols = [
      { field: 'posicao', header: 'Posição' },
      { field: 'jogador', header: 'Jogador' },
      { field: 'pontos', header: 'Pontos' }
    ];

     
  }

}
