import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeprtComponent } from './list-deprt.component';

describe('ListDeprtComponent', () => {
  let component: ListDeprtComponent;
  let fixture: ComponentFixture<ListDeprtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeprtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
