import { ProgrammeType } from "./programme-type.model";
import { ApplicationLocation } from "./application-location.model";

export class ProgrammeApplicationCard{
    type: ProgrammeType;
    title: string;
    description: string;
    presenters: Array<string>;
    presenterBiographies: Array<string>;
    duration: number;
    contactEmail: string;
    contactNumber: string;
    unavailability: string;
    questions: string;
    numberOfTables: number;
    numberOfPlayers: number;
    applicationLocation: ApplicationLocation;
    organizationName: string;

    constructor(){
        this.title = "";
        this.description = "";
        this.presenters = new Array<string>();
        this.presenters.push("");
        this.presenterBiographies = new Array<string>();
        this.presenterBiographies.push("");
        this.duration = 30;
        this.contactEmail = "";
        this.contactNumber = "";
        this.unavailability = "";
        this.questions = "";
        this.applicationLocation = new ApplicationLocation();
        this.applicationLocation.id = 1;
        this.organizationName = "";
    }
}