import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmodelComponent } from './authmodel.component';

describe('AuthmodelComponent', () => {
  let component: AuthmodelComponent;
  let fixture: ComponentFixture<AuthmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
