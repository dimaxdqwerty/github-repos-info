import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReposPanelComponent } from './repos-panel/repos-panel.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoInfoComponent } from './repo-info/repo-info.component';
import { RepoInfoHeaderComponent } from './repo-info-header/repo-info-header.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReposPanelComponent,
    HomeComponent,
    RepoInfoComponent,
    RepoInfoHeaderComponent,
    ContributorsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
