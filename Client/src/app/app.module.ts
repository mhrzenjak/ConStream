import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { TypeChooserComponent } from "./type-chooser/type-chooser.component";
import { ApplicationFormComponent } from "./application-form/application-form.component";
import { ThankyouComponent } from "./thankyou/thankyou.component";

import { ApplicationService } from "./shared/application.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'ChooseType',
        component: TypeChooserComponent
      },
      {
        path: 'ThankYou',
        component: ThankyouComponent
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
  declarations: [AppComponent, TypeChooserComponent, ApplicationFormComponent, ThankyouComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
