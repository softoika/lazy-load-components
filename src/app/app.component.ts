import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TableDialogComponent } from './table-dialog/table-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lazy-load-components';
  visible = false;

  @ViewChild('dialogContainer', { read: ViewContainerRef })
  dialogContainer!: ViewContainerRef;

  dialog?: TableDialogComponent;

  constructor(private resolver: ComponentFactoryResolver) {}

  async onClickDialogButton() {
    if (!this.dialog) {
      this.dialog = await this.loadDialog();
    }
    this.visible = !this.visible;
    this.dialog.visible = this.visible;
  }

  private async loadDialog() {
    const { TableDialogComponent } = await import(
      './table-dialog/table-dialog.component'
    );
    const factory = this.resolver.resolveComponentFactory(TableDialogComponent);
    const { instance } = this.dialogContainer.createComponent(factory);
    instance.hide.subscribe((visible) => (this.visible = visible));
    return instance;
  }
}
