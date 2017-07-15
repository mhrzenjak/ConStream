import { Component, OnInit } from '@angular/core';

import { ProgrammeType } from "../shared/programme-type.model";

import { ApplicationService } from "../shared/application.service";

@Component({
  selector: 'type-chooser',
  templateUrl: './type-chooser.component.html',
})
export class TypeChooserComponent implements OnInit {
    
    types: Array<ProgrammeType>;

    constructor(private applicationService: ApplicationService){}

    ngOnInit(){
        this.types = this.applicationService.getApplicationTypes();
    }
}