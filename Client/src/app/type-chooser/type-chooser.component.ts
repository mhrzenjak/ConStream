import { Component, OnInit } from '@angular/core';

import { ProgrammeType } from "../shared/programme-type.model";

@Component({
  selector: 'type-chooser',
  templateUrl: './type-chooser.component.html',
})
export class TypeChooserComponent implements OnInit {
    types: Array<ProgrammeType>;

    ngOnInit(){
        this.types = [
            {id: 1, name: 'Predavanje', glyphicon: 'glyphicon-user'},
            {id: 2, name: 'Panel', glyphicon: 'glyphicon-blackboard'},
            {id: 3, name: 'Okrugli stol', glyphicon: 'glyphicon-comment'},
            {id: 4, name: 'Predstavljanje knjige, časopisa, fanzina, stripa, igre i sl.', glyphicon: 'glyphicon-book'},
            {id: 5, name: 'Radionicu', glyphicon: 'glyphicon-scissors'},
            {id: 6, name: 'Kviz i sličan zabavni program', glyphicon: 'glyphicon-play'},
            {id: 7, name: 'Program igraonice', glyphicon: 'glyphicon-king'},
            {id: 8, name: 'Filmsku projekciju, predstavu i sl.', glyphicon: 'glyphicon-film'},
        ];
    }
}