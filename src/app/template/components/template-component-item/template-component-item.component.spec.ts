import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponentItemComponent } from './template-component-item.component';

describe('TemplateComponentItemComponent', () => {
  let component: TemplateComponentItemComponent;
  let fixture: ComponentFixture<TemplateComponentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateComponentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
