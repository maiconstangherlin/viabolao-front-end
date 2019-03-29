import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LanceListComponent } from './lance-list/lance-list.component';
import { LanceFormComponent } from './lance-form/lance-form.component';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SpinnerModule } from 'primeng/spinner';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
    declarations: [
        LanceListComponent,
        LanceFormComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AccordionModule,
        InputTextModule,
        TableModule,
        SpinnerModule,
        KeyFilterModule
    ],
    exports: [
        LanceListComponent
    ]
})
export class LancesModule { }