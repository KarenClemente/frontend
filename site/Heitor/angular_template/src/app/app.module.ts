import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 // import { Router } from '@angular/router'; // Added
// import { RouterModule } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';

// Pages
import { AppComponent } from './app.component';
import { TestComponent } from './teste/test';
import { HomeComponent } from './home/home';

import { ChartsModule } from 'ng2-charts';

const appRoutes: Routes = [
  // { path: 'home', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
