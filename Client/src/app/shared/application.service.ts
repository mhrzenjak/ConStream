import { Injectable } from '@angular/core';

import { ProgrammeApplicationCard } from "./programme-application-card.model";
import { ProgrammeType } from "./programme-type.model";
import { ApplicationLocation } from "./application-location.model";

@Injectable()
export class ApplicationService {

    applicationTypes: Array<ProgrammeType> = [
        { id: 1, name: 'Predavanje', glyphicon: 'glyphicon-user' },
        { id: 2, name: 'Panel', glyphicon: 'glyphicon-blackboard' },
        { id: 3, name: 'Okrugli stol', glyphicon: 'glyphicon-comment' },
        { id: 4, name: 'Predstavljanje knjige, časopisa, fanzina, stripa, igre i sl.', glyphicon: 'glyphicon-book' },
        { id: 5, name: 'Radionicu', glyphicon: 'glyphicon-scissors' },
        { id: 6, name: 'Kviz i sličan zabavni program', glyphicon: 'glyphicon-play' },
        { id: 7, name: 'Program igraonice', glyphicon: 'glyphicon-king' },
        { id: 8, name: 'Filmsku projekciju, predstavu i sl.', glyphicon: 'glyphicon-film' },
    ];

    applicationLocations: Array<ApplicationLocation> = [
        { id: 1, name: "Info pult" },
        { id: 2, name: "Štand udruge" }
    ];

    getApplicationTypes(): Array<ProgrammeType> {

        return this.applicationTypes;
    }

    getApplicationType(id: number): ProgrammeType {

        return this.applicationTypes.find(x => x.id == id);
    }

    getApplicationLocations(): Array<ApplicationLocation>{

        return this.applicationLocations;
    }

    getApplicationLocation(id: number): ApplicationLocation {

        return this.applicationLocations.find(x => x.id == id);
    }
}