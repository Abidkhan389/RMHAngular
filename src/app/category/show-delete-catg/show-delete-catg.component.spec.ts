import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteCatgComponent } from './show-delete-catg.component';

describe('ShowDeleteCatgComponent', () => {
  let component: ShowDeleteCatgComponent;
  let fixture: ComponentFixture<ShowDeleteCatgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteCatgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
