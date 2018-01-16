import {
  ChangeDetectionStrategy,
  ComponentFactoryResolver, Component, Input, AfterViewInit, ViewChild
} from '@angular/core';
import { DynamicTemplate } from '../dynamic-template.type';
import { DynamicTemplateHostDirective } from '../../directives/dynamic-template-host.directive';
import { TemplateComponent } from '../template-component.interface';

@Component({
  selector: 'dynamic-template-component',
  templateUrl: './dynamic-template.component.html'
})
export class DynamicTemplateComponent implements AfterViewInit {

  @Input()
  public component: DynamicTemplate;
  @ViewChild(DynamicTemplateHostDirective) public templateHost: DynamicTemplateHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit () {
      this.loadComponent();
  }

  private loadComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component.component);
    this.templateHost.viewContainerRef.clear();
    const componentRef = this.templateHost.viewContainerRef.createComponent(componentFactory);
    (<TemplateComponent>componentRef.instance).data = this.component.data;
    componentRef.changeDetectorRef.detectChanges();
  }

}
