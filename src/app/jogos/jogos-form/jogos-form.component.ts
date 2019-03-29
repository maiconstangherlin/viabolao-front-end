import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Time } from 'src/app/times/time';
import { TimeService } from 'src/app/times/time.service';
import { JogosService } from '../jogos.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Jogo } from '../jogo';

@Component({
  selector: 'app-jogos-form',
  templateUrl: './jogos-form.component.html',
  styleUrls: ['./jogos-form.component.css']
})
export class JogosFormComponent implements OnInit {

  jogoForm: FormGroup;
  @Output() refresh = new EventEmitter()

  times: Time[] = [];
  timesCasaFiltrados: Time[] = [];
  timesVisitanteFiltrados: Time[] = [];
  es: any;
  dataJogo: Date;

  constructor(private formBuilder: FormBuilder,
    private timeService: TimeService,
    private jogoService: JogosService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.timeService.getTimes().subscribe(times => this.times = times);

    this.jogoForm = this.formBuilder.group({
      data: ['', Validators.required],
      equipeA: ['', Validators.required],
      equipeB: ['', Validators.required]
    })

    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
      dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
      dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
      monthNames: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
      monthNamesShort: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
      today: 'Hoy',
      clear: 'Borrar'
    }
  }

  filtrarTimesCasa(event) {
    this.timesCasaFiltrados = [];

    for (let i = 0; i < this.times.length; i++) {
      let time = this.times[i];
      if (time.nome.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.timesCasaFiltrados.push(time);
      }
    }
  }

  filtrarTimesVisitante(event) {
    this.timesVisitanteFiltrados = [];

    for (let i = 0; i < this.times.length; i++) {
      let time = this.times[i];
      if (time.nome.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.timesVisitanteFiltrados.push(time);
      }
    }
  }

  cadastrar() {
    const jogo: any = {
      data: this.jogoForm.controls.data.value,      
      timeA: {        
        id: (this.jogoForm.controls.equipeA.value.id as number)
      },
      timeB: {
        id: (this.jogoForm.controls.equipeB.value.id as number)
      }
    }

    this.jogoService.add(jogo)
      .subscribe(
        () => {
          this.refresh.emit();
          this.messageService.add({ severity: 'success', summary: 'Salvo!', detail: 'Jogo adicionado com sucesso' });
        },
        () => this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Falha ao adicionar o jogo' })
      )

  }

}
