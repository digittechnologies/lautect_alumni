import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgallerycatComponent } from './editgallerycat.component';

describe('EditgallerycatComponent', () => {
  let component: EditgallerycatComponent;
  let fixture: ComponentFixture<EditgallerycatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditgallerycatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditgallerycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
