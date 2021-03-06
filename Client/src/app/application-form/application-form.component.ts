import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProgrammeApplicationCard } from "../shared/programme-application-card.model";
import { ProgrammeType } from "../shared/programme-type.model";

import { ApplicationService } from "../shared/application.service";

@Component({
	selector: 'application-form',
	templateUrl: './application-form.component.html'
})
export class ApplicationFormComponent {

	programmeApplication: ProgrammeApplicationCard;

    stage: number = 1;
    maxStage: number = 4;
    progress: string;

    isPresenterListValid: boolean;
    isPresenterListTouched: boolean;

    isRequestSending: boolean;

	constructor(
        private route: ActivatedRoute, 
        private applicationService: ApplicationService,
        private router: Router) { }

	ngOnInit(): void {
		this.programmeApplication = new ProgrammeApplicationCard();
        this.programmeApplication.type = new ProgrammeType();
		this.route.params.subscribe(
			params => {
				this.programmeApplication.type = this.applicationService.getApplicationType(params["id"]);
			}
		);
        if (this.programmeApplication.type.id == 6
            || this.programmeApplication.type.id == 7){
                this.maxStage++;
            }
        this.calculateProgress();
        this.isPresenterListValid = false;
        this.isPresenterListTouched = false;
        this.isRequestSending = false;
	}

    previousStage(): void{
        this.stage--;
        this.calculateProgress();
    }

    nextStage(): void{
        this.stage++;
        this.calculateProgress();
    }

    addPresenter(): void{
        this.programmeApplication.presenters.push("");
        this.programmeApplication.presenterBiographies.push("");
    }

    removePresenter(): void{
        this.programmeApplication.presenters.pop()
        this.programmeApplication.presenterBiographies.pop();
    }

    checkIfPresenterListIsValid(){
        this.isPresenterListValid = (this.programmeApplication.presenters.length > 0 && this.programmeApplication.presenterBiographies.length > 0);
        this.isPresenterListTouched = true;

        if(this.isPresenterListValid){
            this.isPresenterListValid = this.programmeApplication.presenterBiographies[0].trim().length > 0 && this.programmeApplication.presenters[0].trim().length > 0
        }
        
    }

    trackByFn(index: any, item: any) {
        return index;
    }

    sendApplication(): void{
        this.isRequestSending = true;
        this.programmeApplication.applicationLocation = this.applicationService.getApplicationLocation(this.programmeApplication.applicationLocation.id);
        console.log(this.programmeApplication);
        this.applicationService.postApplication(this.programmeApplication)
        .subscribe(
            value => { 
                console.log(value);
                this.router.navigate(['/ThankYou']);
                this.isRequestSending = false;
            },
            error => {
                console.log(error);
                this.isRequestSending = false;
            }
        );
    }

    private calculateProgress(): void{
        this.progress = (this.stage*100/this.maxStage).toString() + "%";
    }
}