import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalRuleComponent } from './horizontal-rule.component';

describe('HorizontalRuleComponent', () => {
  let component: HorizontalRuleComponent;
  let fixture: ComponentFixture<HorizontalRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
