import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterOptionsComponent } from './printer-options.component';

describe('PrinterOptionsComponent', () => {
  let component: PrinterOptionsComponent;
  let fixture: ComponentFixture<PrinterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
