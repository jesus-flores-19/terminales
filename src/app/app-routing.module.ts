import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrepagoComponent} from "./promociones/prepago/prepago.component"
import {PospagoComponent} from "./promociones/pospago/pospago.component"
import {PosPreComponent} from "./promociones/pos-pre/pos-pre.component"
import { RenovacionesComponent } from './promociones/renovaciones/renovaciones.component';

const routes: Routes = [
  {path: "prepago", component: PrepagoComponent},
  {path: "pospago", component: PospagoComponent},
  {path: "renovaciones", component: RenovacionesComponent},
  {path: "**", redirectTo: "prepago"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
