import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlignmentTileComponent } from './text-alignment-tile.component';

describe('TextAlignmentTileComponent', () => {
  let component: TextAlignmentTileComponent;
  let fixture: ComponentFixture<TextAlignmentTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAlignmentTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAlignmentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
