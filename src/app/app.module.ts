import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Pipe,PipeTransform} from '@angular/core';

 // import { Router } from '@angular/router'; // Added
// import { RouterModule } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {ServerProvider} from '../providers/server';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgxMaskModule} from 'ngx-mask';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

// Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home';
import { MadeByMeComponent } from './madeByme/madeByme';
import { SolvedComponent } from './solved/solved';
import { LikedComponent } from './liked/liked';
import { RankingComponent } from './ranking/ranking';
import { PostComponent } from './post/post';
import { FeedComponent } from './feed/feed';
import { GrdFilterPipes } from './feed/grd-filter.pipe';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';

const appRoutes: Routes = [
  // { path: 'home', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'madeByme', component: MadeByMeComponent },
  { path: 'solved', component: SolvedComponent },
  { path: 'liked', component: LikedComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'post', component: PostComponent },
  { path: 'feed', component: FeedComponent }
];

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    MadeByMeComponent,
    SolvedComponent,
    RankingComponent,
    LikedComponent,
    PostComponent,
    FeedComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxMaskModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [ ServerProvider ],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
