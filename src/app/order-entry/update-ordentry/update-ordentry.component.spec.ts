import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrdentryComponent } from './update-ordentry.component';

describe('UpdateOrdentryComponent', () => {
  let component: UpdateOrdentryComponent;
  let fixture: ComponentFixture<UpdateOrdentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrdentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrdentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
