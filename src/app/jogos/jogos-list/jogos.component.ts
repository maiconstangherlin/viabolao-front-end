import { Component, OnInit } from '@angular/core';
import { JogosService } from '../jogos.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Jogo } from '../jogo';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos: Jogo[];
  jogosRestantes: number;

  constructor(private jogosService: JogosService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.loadJogos();
  }

  refresh(event) {
    this.loadJogos();
  }

  loadJogos() {
    this.jogosService.getJogos()
      .subscribe(jogos => this.jogos = jogos);

    //Chamando o server pela 2º apenas para trabalhar com o count do Spring Data
    this.jogosService.getJogosRestantes()
      .subscribe((num) => this.jogosRestantes = num);
  }

  salvar() {
    this.jogosService.updateList(this.jogos).subscribe(() =>
      this.messageService.add({ severity: 'success', summary: 'Salvo!', detail: 'Resultados registrados com sucesso.' }));
  }
}
