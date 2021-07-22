import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [ // sets up routes constant where you define your routes
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: '1', redirectTo: '/first'},
  {path: '2', redirectTo: '/second'},
  {path: 'list/:id', component: SecondComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
