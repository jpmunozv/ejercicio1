import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesAliveComponent } from './personajes-alive.component';

describe('PersonajesAliveComponent', () => {
  let component: PersonajesAliveComponent;
  let fixture: ComponentFixture<PersonajesAliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajesAliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesAliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
