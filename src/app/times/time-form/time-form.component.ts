import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TimeService } from '../time.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.css']
})
export class TimeFormComponent implements OnInit {

  timeForm: FormGroup;
  imgAux: string = '';

  @Output() refresh = new EventEmitter()

  constructor(private formBuilder: FormBuilder,
    private timeService: TimeService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.timeForm = this.formBuilder.group({
      time: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
      url: ['', Validators.maxLength(500)]
    })
  }

  cadastrar() {
    const nome = this.timeForm.get('time').value;
    const url = this.timeForm.get('url').value;

    this.timeService.add(nome, url)
      .subscribe(
        () => {
          this.refresh.emit();
          this.messageService.add({ severity: 'success', summary: 'Salvo!', detail: 'Time adicionado com sucesso' });
        },
        () => this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Falha ao adicionar o time' })
      )
      
  }

}
