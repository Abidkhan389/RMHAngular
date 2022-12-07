import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeprtComponent } from './delete-deprt.component';

describe('DeleteDeprtComponent', () => {
  let component: DeleteDeprtComponent;
  let fixture: ComponentFixture<DeleteDeprtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDeprtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDeprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
