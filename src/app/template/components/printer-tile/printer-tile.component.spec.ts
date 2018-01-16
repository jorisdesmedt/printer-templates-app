import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterTileComponent } from './printer-tile.component';

describe('PrinterTileComponent', () => {
  let component: PrinterTileComponent;
  let fixture: ComponentFixture<PrinterTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
