import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListComponentComponent } from './person-list-component.component';

describe('PersonListComponentComponent', () => {
  let component: PersonListComponentComponent;
  let fixture: ComponentFixture<PersonListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonListComponentComponent]
    });
    fixture = TestBed.createComponent(PersonListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
