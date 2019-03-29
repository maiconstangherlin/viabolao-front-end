import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Time } from './time';

const API = environment.api;

@Injectable({providedIn: 'root'})
export class TimeService{

    constructor(private http: HttpClient){}

    getTimes(){    
        return this.http.get<Time[]>(API + 'time/');
    }

    add(nome: string, url: string){
        return this.http.post<number>(API + 'time/', { nome, urlImagem: url }); 
    }

    remove(id: number){
        return this.http.delete<boolean>(API + 'time/' + id);
    }
}