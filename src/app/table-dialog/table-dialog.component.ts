import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { TableDataRow } from './table-dialog';
import { TableDialogService } from './table-dialog.service';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss'],
})
export class TableDialogComponent implements OnInit {
  @Input() visible = false;
  @Output() hide = new EventEmitter<boolean>();

  data$?: Observable<TableDataRow[]>;

  constructor(private tableDialogService: TableDialogService) {}

  ngOnInit() {
    // コンポーネントを依存関係込みで遅延ロードするには以下のようにモジュールをコンポーネントファイルでimportする必要がある
    // 通常のimportだと遅延ロード時に`ReferenceError: Cannot access 'TableDialogComponent' before initialization`で怒られてしまう。
    import('./table-dialog.module');
    this.data$ = this.tableDialogService.getData();
  }

  onHide() {
    this.hide.emit(this.visible);
  }
}
