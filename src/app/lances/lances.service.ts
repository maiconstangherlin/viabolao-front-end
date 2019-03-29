import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Lance } from './lance';
import { LancePaginado } from './lancePaginado';
import { Observable } from 'rxjs';

const API = environment.api;

@Injectable({ providedIn: 'root' })
export class LancesService {

    constructor(private http: HttpClient) { }

    getLancesJogador(jogador: string, pagina: number): Observable<LancePaginado> {
        return this.http.get<LancePaginado>(API + 'lance/jogador?jogador=' + jogador + '&pagina=' + pagina);
    }

    add(lance: Lance): Observable<Lance> {
        return this.http.post<Lance>(API + 'lance/', lance);
    }

    update(id: number, lance: Lance): Observable<Lance> {
        return this.http.put<Lance>(API + 'lance/' + id, lance);
    }
}