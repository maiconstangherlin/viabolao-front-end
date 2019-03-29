import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lideres',
  templateUrl: './lideres.component.html',
  styleUrls: ['./lideres.component.css']
})
export class LideresComponent implements OnInit {

  @Input() jogador: string;
  @Input() posicao: number;

  urlImagem: string;

  constructor() { }

  ngOnInit() {
    if (this.posicao == 1) {
      this.urlImagem = "assets/img/medalha_ouro.png";
    } else if (this.posicao == 2) { 
      this.urlImagem = "assets/img/medalha_prata.png";
    } else if (this.posicao == 3) {
      this.urlImagem = "assets/img/medalha_bronze.png";
    }
  }

}
