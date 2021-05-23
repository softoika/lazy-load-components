import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDialogComponent } from './table-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [TableDialogComponent],
  imports: [CommonModule, DialogModule, TableModule],
})
export class TableDialogModule {}
