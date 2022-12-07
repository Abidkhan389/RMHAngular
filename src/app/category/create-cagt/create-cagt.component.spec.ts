import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCagtComponent } from './create-cagt.component';

describe('CreateCagtComponent', () => {
  let component: CreateCagtComponent;
  let fixture: ComponentFixture<CreateCagtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCagtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCagtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
