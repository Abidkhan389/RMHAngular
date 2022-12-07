import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeprtComponent } from './update-deprt.component';

describe('UpdateDeprtComponent', () => {
  let component: UpdateDeprtComponent;
  let fixture: ComponentFixture<UpdateDeprtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeprtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
