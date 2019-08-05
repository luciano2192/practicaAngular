import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {path:"" , redirectTo:"tabla/ARG", pathMatch:"full"},
  {path:"tabla/:pais" , component: TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
