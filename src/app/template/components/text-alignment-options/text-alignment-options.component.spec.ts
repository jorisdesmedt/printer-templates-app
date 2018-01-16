import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlignmentOptionsComponent } from './text-alignment-options.component';

describe('TextAlignmentOptionsComponent', () => {
  let component: TextAlignmentOptionsComponent;
  let fixture: ComponentFixture<TextAlignmentOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAlignmentOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAlignmentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
