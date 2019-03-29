import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Classificacao } from './classificacao';
import { Observable } from 'rxjs';

const API = environment.api;

@Injectable({ providedIn: 'root' })
export class ClassificacaoService {

    constructor(private http: HttpClient) { }

    get(): Observable<Classificacao> {
        return this.http.get<Classificacao>(API + 'classificacao/');
    }

}