import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
// コンポーネントを依存関係込みで遅延ロードするには以下のようにモジュールをコンポーネントファイルでimportする必要がある
import './table-dialog.module';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss'],
})
export class TableDialogComponent {
  @Input() visible = false;
  @Output() hide = new EventEmitter<boolean>();

  data = [
    { foo: 'foo', bar: 'bar', baz: 1111 },
    { foo: 'foo', bar: 'bar', baz: 1111 },
    { foo: 'foo', bar: 'bar', baz: 1111 },
    { foo: 'foo', bar: 'bar', baz: 1111 },
    { foo: 'foo', bar: 'bar', baz: 1111 },
  ];

  onHide() {
    this.hide.emit(this.visible);
  }
}
