import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTextEditComponent } from './horizontal-rule-edit.component';

describe('FreeTextEditComponent', () => {
  let component: FreeTextEditComponent;
  let fixture: ComponentFixture<FreeTextEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTextEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTextEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
