import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuerequestFormComponent } from './valuerequest-form.component';

describe('ValuerequestFormComponent', () => {
  let component: ValuerequestFormComponent;
  let fixture: ComponentFixture<ValuerequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuerequestFormComponent]
    });
    fixture = TestBed.createComponent(ValuerequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
