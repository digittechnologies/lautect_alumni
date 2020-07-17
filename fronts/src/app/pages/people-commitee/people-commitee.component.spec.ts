import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCommiteeComponent } from './people-commitee.component';

describe('PeopleCommiteeComponent', () => {
  let component: PeopleCommiteeComponent;
  let fixture: ComponentFixture<PeopleCommiteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleCommiteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCommiteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
