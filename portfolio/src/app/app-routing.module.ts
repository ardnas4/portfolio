import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarHeaderComponent } from '../header/navigation-bar-header/navigation-bar-header.component';

export const routes: Routes = [
  {
    path: '',
    component: NavigationBarHeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

