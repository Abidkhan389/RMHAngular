import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCatgComponent } from './add-edit-catg.component';

describe('AddEditCatgComponent', () => {
  let component: AddEditCatgComponent;
  let fixture: ComponentFixture<AddEditCatgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCatgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
