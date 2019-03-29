import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';

import { TimeFormComponent } from './time-form/time-form.component';
import { TimesComponent } from './times-list/times.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '', component: TimesComponent }
]

@NgModule({
    declarations: [
        TimeFormComponent,
        TimesComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,      
        AccordionModule,
        RouterModule.forChild(ROUTES)      
    ],
    exports: [
        TimeFormComponent,
        TimesComponent
    ]
})
export class TimeModule { }