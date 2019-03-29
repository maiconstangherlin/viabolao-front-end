import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreComponent } from './sobre.component';

const ROUTES: Routes = [
    { path: '', component: SobreComponent }
]

@NgModule({
    declarations: [
        SobreComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class SobreModule { }