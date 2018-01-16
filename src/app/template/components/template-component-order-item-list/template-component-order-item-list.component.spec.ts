import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponentOrderItemListComponent } from './template-component-order-item-list.component';

describe('TemplateComponentOrderItemListComponent', () => {
  let component: TemplateComponentOrderItemListComponent;
  let fixture: ComponentFixture<TemplateComponentOrderItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateComponentOrderItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponentOrderItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
