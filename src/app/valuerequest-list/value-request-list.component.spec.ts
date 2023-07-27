import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueRequestListComponent } from './value-request-list.component';

describe('ValuerequestListComponent', () => {
  let component: ValueRequestListComponent;
  let fixture: ComponentFixture<ValueRequestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValueRequestListComponent]
    });
    fixture = TestBed.createComponent(ValueRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
