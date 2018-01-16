import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTypeOptionsComponent } from './template-type-options.component';

describe('TemplateTypeOptionsComponent', () => {
  let component: TemplateTypeOptionsComponent;
  let fixture: ComponentFixture<TemplateTypeOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTypeOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTypeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
