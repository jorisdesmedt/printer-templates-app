import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardCardComponent } from './wizard-card.component';

describe('WizardCardComponent', () => {
  let component: WizardCardComponent;
  let fixture: ComponentFixture<WizardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
