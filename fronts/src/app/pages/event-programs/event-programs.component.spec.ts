import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventProgramsComponent } from './event-programs.component';

describe('EventProgramsComponent', () => {
  let component: EventProgramsComponent;
  let fixture: ComponentFixture<EventProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
