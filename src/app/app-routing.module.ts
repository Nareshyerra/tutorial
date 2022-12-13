import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';

const routes: Routes = [

{path: "jobs", component: JobdetailsComponent},
{path: "home", component: AppComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
