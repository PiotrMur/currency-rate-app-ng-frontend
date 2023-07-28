import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchrequestFormComponent } from './fetchrequest-form.component';

describe('FetchrequestFormComponent', () => {
  let component: FetchrequestFormComponent;
  let fixture: ComponentFixture<FetchrequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchrequestFormComponent]
    });
    fixture = TestBed.createComponent(FetchrequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
