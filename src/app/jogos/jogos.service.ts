import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Jogo } from './jogo';

const API = environment.api;

@Injectable({ providedIn: 'root' })
export class JogosService {

    constructor(private http: HttpClient) { }

    getJogos(): Observable<Jogo[]> {
        return this.http.get<Jogo[]>(API + 'jogo/');
    }

    getJogosRestantes() {
        return this.http.get<number>(API + 'jogo/jogosrestantes');
    }

    add(jogo: Jogo) {
        return this.http.post<number>(API + 'jogo/', jogo);
    }

    remove(id: number) {
        return this.http.delete<boolean>(API + 'jogo/' + id);

    }

    updateList(jogos: Jogo[]): Observable<boolean> {
        return this.http.put<boolean>(API + 'jogo/', jogos);
    }
}
