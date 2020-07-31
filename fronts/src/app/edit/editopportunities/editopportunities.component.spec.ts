import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditopportunitiesComponent } from './editopportunities.component';

describe('EditopportunitiesComponent', () => {
  let component: EditopportunitiesComponent;
  let fixture: ComponentFixture<EditopportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditopportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditopportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
