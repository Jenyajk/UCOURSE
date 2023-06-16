import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TedComponent } from './ted.component';

describe('TedComponent', () => {
  let component: TedComponent;
  let fixture: ComponentFixture<TedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TedComponent]
    });
    fixture = TestBed.createComponent(TedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
