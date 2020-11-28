import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthLayoutComponent } from './app-auth-layout.component';

describe('AppAuthLayoutComponent', () => {
  let component: AppAuthLayoutComponent;
  let fixture: ComponentFixture<AppAuthLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAuthLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
