import { PrinterService } from './printer.service';
import { TemplateService } from './template.service';
import { TemplateComponentService } from './template-component.service';

export const services: any[] = [PrinterService, TemplateService, TemplateComponentService];

export * from './printer.service';
export * from './template.service';
export * from './template-component.service';
