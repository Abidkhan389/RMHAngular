import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyidCagtComponent } from './getbyid-cagt.component';

describe('GetbyidCagtComponent', () => {
  let component: GetbyidCagtComponent;
  let fixture: ComponentFixture<GetbyidCagtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbyidCagtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbyidCagtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
