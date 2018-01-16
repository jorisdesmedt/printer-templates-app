import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponentItemListComponent } from './template-component-item-list.component';

describe('TemplateComponentItemListComponent', () => {
  let component: TemplateComponentItemListComponent;
  let fixture: ComponentFixture<TemplateComponentItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateComponentItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponentItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
