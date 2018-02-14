import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { IndexComponent } from './index.component';
import { HomeComponent } from './home.component';
import { PositionsComponent } from './positions.component';
import { DonateComponent } from './donate.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'positions', component: PositionsComponent},
  {path: 'donate', component: DonateComponent}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, IndexComponent, AboutComponent, HomeComponent, PositionsComponent, DonateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
