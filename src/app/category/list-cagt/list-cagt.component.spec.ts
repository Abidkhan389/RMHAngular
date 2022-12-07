import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCagtComponent } from './list-cagt.component';

describe('ListCagtComponent', () => {
  let component: ListCagtComponent;
  let fixture: ComponentFixture<ListCagtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCagtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCagtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
