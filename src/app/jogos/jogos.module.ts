import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { DataViewModule } from 'primeng/dataview';
import { SpinnerModule } from 'primeng/spinner';

import { JogosComponent } from './jogos-list/jogos.component';
import { JogosFormComponent } from './jogos-form/jogos-form.component';


const ROUTES: Routes = [
    { path: '', component: JogosComponent }
]

@NgModule({
    declarations: [
        JogosComponent,
        JogosFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AutoCompleteModule,
        AccordionModule,
        CalendarModule,
        DataViewModule,
        SpinnerModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        JogosComponent,
        JogosFormComponent
    ]
})
export class JogosModule { }