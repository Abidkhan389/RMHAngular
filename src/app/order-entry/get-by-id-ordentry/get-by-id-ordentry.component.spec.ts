import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIDOrdentryComponent } from './get-by-id-ordentry.component';

describe('GetByIDOrdentryComponent', () => {
  let component: GetByIDOrdentryComponent;
  let fixture: ComponentFixture<GetByIDOrdentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByIDOrdentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIDOrdentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
