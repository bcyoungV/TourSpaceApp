import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouristePage } from './touriste.page';

const routes: Routes = [
  {
    path: '',
    component: TouristePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouristePageRoutingModule {}
