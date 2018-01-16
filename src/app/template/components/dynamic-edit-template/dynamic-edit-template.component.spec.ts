import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEditTemplateComponent } from './dynamic-edit-template.component';

describe('DynamicEditTemplateComponent', () => {
  let component: DynamicEditTemplateComponent;
  let fixture: ComponentFixture<DynamicEditTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicEditTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicEditTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
