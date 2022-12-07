import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdentryComponent } from './list-ordentry.component';

describe('ListOrdentryComponent', () => {
  let component: ListOrdentryComponent;
  let fixture: ComponentFixture<ListOrdentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrdentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
