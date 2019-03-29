import { Component, OnInit } from '@angular/core';

import { TimeService } from '../time.service';
import { Time } from '../time';
import { MessageService } from 'primeng/components/common/messageservice';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {
  times: Time[] = [];

  constructor(private timeService: TimeService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.timeService.getTimes()
      .subscribe(times => this.times = times);
  }

  remove(id: number){    
    this.timeService.remove(id)
      .subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Removido!', detail: 'Time removido com sucesso' });
        this.timeService.getTimes().subscribe(times => this.times = times);
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Erro!', detail: error.error.message});
        console.log(error);
      });

  }

  refresh(){
    this.timeService.getTimes()
      .subscribe(times => this.times = times);
  }

}
