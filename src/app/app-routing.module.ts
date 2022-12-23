import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageArchanloComponent } from './pages/page-archanlo/page-archanlo.component';

const routes: Routes = [
  {
    path: '',
    component: PageArchanloComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
