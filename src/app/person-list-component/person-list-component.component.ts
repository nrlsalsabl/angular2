import { Component, OnInit } from '@angular/core';
import { PERSON } from '../mock-person';
import { Person } from '../person';

@Component({
  selector: 'app-person-list-component',
  templateUrl: './person-list-component.component.html',
  styleUrls: ['./person-list-component.component.css']
})
export class PersonListComponentComponent implements OnInit{

  personList = PERSON;
  selectedPerson? : Person;

  constructor(){ }

  ngOnInit(): void {
  }

  // rating(n: number) {
  //   return new Array(n);
  // }

  onEditClick(selectedPerson: Person): void {
    selectedPerson.edited = true;
  }

  onDeleteClick(selectedPerson: Person): void {
    selectedPerson.deleted = true;
  }


}
