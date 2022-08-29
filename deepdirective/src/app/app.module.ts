import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasichighlightDirective } from './basic-highlight/basichighlight.directive';
import { BetterHightlightDirective } from './better-highlight/better-hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasichighlightDirective,
    BetterHightlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
