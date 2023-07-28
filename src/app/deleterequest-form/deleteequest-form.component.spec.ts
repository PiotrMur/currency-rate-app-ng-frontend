import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterequestFormComponent } from './deleterequest-form.component';

describe('FetchrequestFormComponent', () => {
  let component: DeleterequestFormComponent;
  let fixture: ComponentFixture<DeleterequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleterequestFormComponent]
    });
    fixture = TestBed.createComponent(DeleterequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
