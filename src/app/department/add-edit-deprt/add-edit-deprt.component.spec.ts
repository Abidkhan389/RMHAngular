import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeprtComponent } from './add-edit-deprt.component';

describe('AddEditDeprtComponent', () => {
  let component: AddEditDeprtComponent;
  let fixture: ComponentFixture<AddEditDeprtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeprtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
