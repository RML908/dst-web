import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DstAlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: DstAlertComponent;
  let fixture: ComponentFixture<DstAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DstAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DstAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
