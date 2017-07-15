import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TypeChooserComponent } from "./type-chooser/type-chooser.component";
import { ApplicationFormComponent } from "./application-form/application-form.component";

import { ApplicationService } from "./shared/application.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'ChooseType',
        component: TypeChooserComponent
      },
      {
        path: 'Apply/:id',
        component: ApplicationFormComponent
      },
      {
        path: '**',
        redirectTo: 'ChooseType',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [ApplicationService],
  declarations: [AppComponent, TypeChooserComponent, ApplicationFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
