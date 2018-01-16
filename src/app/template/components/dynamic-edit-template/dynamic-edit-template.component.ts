import {
  AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges,
  OnDestroy, OnInit, Output,
  ViewChild
} from '@angular/core';
import { DynamicTemplateHostDirective } from '../../directives/dynamic-template-host.directive';
import { EditTemplateComponent } from '../template-component.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'dynamic-edit-template',
  templateUrl: './dynamic-edit-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicEditTemplateComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() component: any;
  @Output() dataChange = new EventEmitter<any>();
  @ViewChild(DynamicTemplateHostDirective) public templateHost: DynamicTemplateHostDirective;
  subscriptions: Subscription[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit () {
    if (this.component) {
      this.loadComponent();
    }
  }

  ngOnChanges () {
    if (this.component && this.templateHost) {
      this.loadComponent();
    }
  }

  ngOnDestroy () {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }

  private loadComponent(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component.editComponent);
    this.templateHost.viewContainerRef.clear();
    const componentRef = this.templateHost.viewContainerRef.createComponent(componentFactory);
    (<EditTemplateComponent>componentRef.instance).data = this.component.data;
    this.subscriptions.push(
      (<EditTemplateComponent>componentRef.instance).dataChange.subscribe(value => this.dataChange.emit(value))
    );
    componentRef.changeDetectorRef.detectChanges();
  }

}
