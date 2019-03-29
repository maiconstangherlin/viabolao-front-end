import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lance-form',
  templateUrl: './lance-form.component.html',
  styleUrls: ['./lance-form.component.css']
})
export class LanceFormComponent implements OnInit {

  lanceForm: FormGroup;
  jogador: string;

  @Output() buscarLances = new EventEmitter();
  @Output() jogadorAlterado = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.lanceForm = this.formBuilder.group({
      jogador: ['', [Validators.required, Validators.minLength(3)]]      
    })
  }

  filtrar() {
    this.buscarLances.emit(this.jogador.trim());
  }

  alterouJogador(){
    this.jogadorAlterado.emit();
  }

}
