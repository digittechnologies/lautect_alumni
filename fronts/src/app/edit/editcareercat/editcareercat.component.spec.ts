import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcareercatComponent } from './editcareercat.component';

describe('EditcareercatComponent', () => {
  let component: EditcareercatComponent;
  let fixture: ComponentFixture<EditcareercatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcareercatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcareercatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
