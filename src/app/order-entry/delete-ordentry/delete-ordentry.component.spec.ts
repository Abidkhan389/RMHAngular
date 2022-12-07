import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrdentryComponent } from './delete-ordentry.component';

describe('DeleteOrdentryComponent', () => {
  let component: DeleteOrdentryComponent;
  let fixture: ComponentFixture<DeleteOrdentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOrdentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOrdentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
