import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedElDirective } from './red-el.directive';
import { CustomstyleDirective } from './customstyle.directive';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { ChildComponent } from './child/child.component';
import { EmitterComponent } from './emitter/emitter.component';

@NgModule({
  declarations: [
    AppComponent,
    RedElDirective,
    CustomstyleDirective,
    TestcomponentComponent,
    ChildComponent,
    EmitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
