import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnewcatComponent } from './editnewcat.component';

describe('EditnewcatComponent', () => {
  let component: EditnewcatComponent;
  let fixture: ComponentFixture<EditnewcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnewcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnewcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
