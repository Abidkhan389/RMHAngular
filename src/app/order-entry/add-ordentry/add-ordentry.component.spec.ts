import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdentryComponent } from './add-ordentry.component';

describe('AddOrdentryComponent', () => {
  let component: AddOrdentryComponent;
  let fixture: ComponentFixture<AddOrdentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrdentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrdentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
