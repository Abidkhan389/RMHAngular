import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteDeprtComponent } from './show-delete-deprt.component';

describe('ShowDeleteDeprtComponent', () => {
  let component: ShowDeleteDeprtComponent;
  let fixture: ComponentFixture<ShowDeleteDeprtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteDeprtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteDeprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
