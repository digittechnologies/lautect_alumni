import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditassoComponent } from './editasso.component';

describe('EditassoComponent', () => {
  let component: EditassoComponent;
  let fixture: ComponentFixture<EditassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditassoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
