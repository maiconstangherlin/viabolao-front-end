import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassificacaoComponent } from './classificacao/classificacao.component';
import { LanceListComponent } from './lances/lance-list/lance-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'classificacao', pathMatch: 'full' },
  { path: 'classificacao', component: ClassificacaoComponent },
  { path: 'lances', component: LanceListComponent },
  { path: 'jogos', loadChildren: './jogos/jogos.module#JogosModule' },
  { path: 'times', loadChildren: './times/time.module#TimeModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobreModule' }, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
