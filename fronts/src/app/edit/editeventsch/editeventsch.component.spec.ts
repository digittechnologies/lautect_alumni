import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeventschComponent } from './editeventsch.component';

describe('EditeventschComponent', () => {
  let component: EditeventschComponent;
  let fixture: ComponentFixture<EditeventschComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeventschComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeventschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
