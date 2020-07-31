import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusercatComponent } from './editusercat.component';

describe('EditusercatComponent', () => {
  let component: EditusercatComponent;
  let fixture: ComponentFixture<EditusercatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditusercatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditusercatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
