import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListOrdentryComponent } from './get-list-ordentry.component';

describe('GetListOrdentryComponent', () => {
  let component: GetListOrdentryComponent;
  let fixture: ComponentFixture<GetListOrdentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetListOrdentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetListOrdentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
