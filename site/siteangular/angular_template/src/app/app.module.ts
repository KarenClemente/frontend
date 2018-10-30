import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 // import { Router } from '@angular/router'; // Added
// import { RouterModule } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {ServerProvider} from '../providers/server';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home';
import { PerfilindexComponent } from './perfilindex/perfilindex';
import { PerfilsecComponent } from './perfilsec/perfilsec';
import { RankingComponent } from './ranking/ranking';
import { StaffComponent } from './staff/staff';
import { DashboardComponent } from './dashboard/dashboard';
import { DemandaComponent } from './demanda/demanda';
import { FeedComponent } from './feed/feed';


const appRoutes: Routes = [
  // { path: 'home', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'perfilindex', component: PerfilindexComponent },
  { path: 'perfilsec', component: PerfilsecComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'demanda', component: DemandaComponent },
  { path: 'feed', component: FeedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilindexComponent,
    PerfilsecComponent,
    RankingComponent,
    StaffComponent,
    DashboardComponent,
    DemandaComponent,
    FeedComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerProvider],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
