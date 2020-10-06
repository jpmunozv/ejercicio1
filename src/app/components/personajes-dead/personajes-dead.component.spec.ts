import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesDeadComponent } from './personajes-dead.component';

describe('PersonajesDeadComponent', () => {
  let component: PersonajesDeadComponent;
  let fixture: ComponentFixture<PersonajesDeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajesDeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesDeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
