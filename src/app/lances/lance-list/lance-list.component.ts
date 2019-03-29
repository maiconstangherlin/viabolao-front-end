import { Component, OnInit } from '@angular/core';
import { LancesService } from '../lances.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Lance, LanceDetail } from '../lance';

@Component({
  selector: 'app-lance-list',
  templateUrl: './lance-list.component.html',
  styleUrls: ['./lance-list.component.css']
})
export class LanceListComponent implements OnInit {

  lances: Lance[];
  jogador: string;
  esconderGrid: boolean = true;
  loading: boolean = true;
  totalRecords: number;

  constructor(private lancesService: LancesService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.loading = true;
  }

  filtrar(jogador: string) {
    this.jogador = jogador;

    this.carregaDados(0);

    this.esconderGrid = false;
  }

  carregaDados(pagina: number) {
    this.lancesService.getLancesJogador(this.jogador, pagina).subscribe((lance) => {
      this.lances = lance.lances;
      this.totalRecords = lance.totalRegistros;
      this.loading = false;
    });
  }

  salvaLance(lance : Lance) {
    lance.jogador = this.jogador;

    if (lance.id) {
      this.lancesService.update(lance.id, lance).subscribe((response) => {
        lance.lanceDetail = response.lanceDetail;
        this.messageService.add({ severity: 'success', summary: 'Salvo!', detail: 'Lance registrado com sucesso.' })
      }
      );
    } else {      
      this.lancesService.add(lance).subscribe((response) => {
        lance.id = response.id;        
        lance.lanceDetail = response.lanceDetail;
        this.messageService.add({ severity: 'success', summary: 'Salvo!', detail: 'Lance registrado com sucesso.' })
      }
      );
    }
  }

  loadLances(event) {
    this.loading = true;

    if (this.lances) {
      let pagina = ((event.first + event.rows) / 5) - 1;

      this.carregaDados(pagina);
    }
  }

  alterouJogador() {
    this.esconderGrid = true;
    this.loading = true;
  }

}
