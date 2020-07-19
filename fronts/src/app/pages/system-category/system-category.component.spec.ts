import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCategoryComponent } from './system-category.component';

describe('SystemCategoryComponent', () => {
  let component: SystemCategoryComponent;
  let fixture: ComponentFixture<SystemCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
