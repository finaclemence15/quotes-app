import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quote1FormComponent } from './quote1-form.component';

describe('Quote1FormComponent', () => {
  let component: Quote1FormComponent;
  let fixture: ComponentFixture<Quote1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quote1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quote1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
