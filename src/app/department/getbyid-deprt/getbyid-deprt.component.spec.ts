import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyidDeprtComponent } from './getbyid-deprt.component';

describe('GetbyidDeprtComponent', () => {
  let component: GetbyidDeprtComponent;
  let fixture: ComponentFixture<GetbyidDeprtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbyidDeprtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbyidDeprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
