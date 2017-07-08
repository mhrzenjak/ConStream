import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TypeChooserComponent } from "./type-chooser/type-chooser.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'ChooseType',
        component: TypeChooserComponent
      },
      {
        path: '**',
        redirectTo: 'ChooseType',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [AppComponent, TypeChooserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
