import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { NameComponent } from './components/name/name.component';

const routes: Routes = [{ path: '', component: LayoutsComponent, children: [{path : 'name', component : NameComponent , pathMatch : "full" }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
