import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { ClassificacaoComponent } from './classificacao.component';
import { GridClassificacaoComponent } from './grid-classificacao/grid-classificacao.component';
import { LideresComponent } from './lideres/lideres.component';

@NgModule({
    declarations: [
        ClassificacaoComponent,
        GridClassificacaoComponent,
        LideresComponent
    ],
    imports: [
        BrowserModule,
        CarouselModule,
        CardModule,
        ButtonModule,
        TableModule
    ],
    exports: [
        ClassificacaoComponent,
        GridClassificacaoComponent
    ]
})
export class ClassificacaoModule { }