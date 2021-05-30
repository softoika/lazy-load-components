import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TableDialogComponent } from './table-dialog.component';

@NgModule({
  declarations: [TableDialogComponent],
  imports: [CommonModule, DialogModule, TableModule],
})
export class TableDialogModule {}
