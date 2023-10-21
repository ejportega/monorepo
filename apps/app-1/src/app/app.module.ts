import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@monorepo/header';
import { TodoModule } from '@monorepo/todo';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule, 
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HeaderModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
