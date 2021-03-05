import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsComponent } from './commits/commits.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { DatefilterComponent } from './datefilter/datefilter.component';

const routes: Routes = [{path : 'contributors', component:ContributorsComponent},
{path : 'commits', component:CommitsComponent},
{path:'datefilter',component:DatefilterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
