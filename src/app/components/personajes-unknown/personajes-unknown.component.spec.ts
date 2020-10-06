import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesUnknownComponent } from './personajes-unknown.component';

describe('PersonajesUnknownComponent', () => {
  let component: PersonajesUnknownComponent;
  let fixture: ComponentFixture<PersonajesUnknownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajesUnknownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesUnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
