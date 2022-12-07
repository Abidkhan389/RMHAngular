import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCagtComponent } from './update-cagt.component';

describe('UpdateCagtComponent', () => {
  let component: UpdateCagtComponent;
  let fixture: ComponentFixture<UpdateCagtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCagtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCagtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
