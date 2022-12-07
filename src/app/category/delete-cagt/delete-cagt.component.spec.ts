import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCagtComponent } from './delete-cagt.component';

describe('DeleteCagtComponent', () => {
  let component: DeleteCagtComponent;
  let fixture: ComponentFixture<DeleteCagtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCagtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCagtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
