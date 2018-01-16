import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicTemplateHost]'
})
export class DynamicTemplateHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
