import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XimbadsComponent } from './ximbads.component';

describe('XimbadsComponent', () => {
  let component: XimbadsComponent;
  let fixture: ComponentFixture<XimbadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XimbadsComponent]
    });
    fixture = TestBed.createComponent(XimbadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
