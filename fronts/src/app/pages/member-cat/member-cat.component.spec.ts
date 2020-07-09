import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCatComponent } from './member-cat.component';

describe('MemberCatComponent', () => {
  let component: MemberCatComponent;
  let fixture: ComponentFixture<MemberCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
