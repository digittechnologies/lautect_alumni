import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsyscatComponent } from './editsyscat.component';

describe('EditsyscatComponent', () => {
  let component: EditsyscatComponent;
  let fixture: ComponentFixture<EditsyscatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsyscatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsyscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
