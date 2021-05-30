import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableDataRow } from './table-dialog';

@Injectable({
  providedIn: 'root',
})
export class TableDialogService {
  getData(): Observable<TableDataRow[]> {
    return of([
      { foo: 'foo', bar: 'bar', baz: 1111 },
      { foo: 'foo', bar: 'bar', baz: 1111 },
      { foo: 'foo', bar: 'bar', baz: 1111 },
      { foo: 'foo', bar: 'bar', baz: 1111 },
      { foo: 'foo', bar: 'bar', baz: 1111 },
    ]);
  }
}
