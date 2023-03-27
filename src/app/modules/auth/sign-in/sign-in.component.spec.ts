import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AuthSignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: AuthSignInComponent;
  let fixture: ComponentFixture<AuthSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
