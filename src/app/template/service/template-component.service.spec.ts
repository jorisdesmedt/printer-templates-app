import { TestBed, inject } from '@angular/core/testing';

import { TemplateComponentService } from './template-component.service';

describe('TemplateComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateComponentService]
    });
  });

  it('should be created', inject([TemplateComponentService], (service: TemplateComponentService) => {
    expect(service).toBeTruthy();
  }));
});
