import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponentOrderItemComponent } from './template-component-order-item.component';

describe('TemplateComponentOrderItemComponent', () => {
  let component: TemplateComponentOrderItemComponent;
  let fixture: ComponentFixture<TemplateComponentOrderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateComponentOrderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponentOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
