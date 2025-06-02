import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import {
  HlmTableBodyDirective,
  HlmTableCellDirective,
  HlmTableDirective,
  HlmTableHeadDirective,
  HlmTableHeaderDirective,
  HlmTableRowDirective,
  HlmTableVariantDefault,
} from '../components/table.directives';
import { columns, Payment } from './columns';
import {
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
} from '@tanstack/angular-table';
import { payments } from './payments';

@Component({
  selector: 'app-data-table-payment',
  imports: [
    HlmTableDirective,
    HlmTableHeaderDirective,
    HlmTableBodyDirective,
    HlmTableRowDirective,
    HlmTableHeadDirective,
    HlmTableCellDirective,

    FlexRenderDirective,
  ],
  template: `
    <div class="rounded-md border">
      <table [hlm]="tableVariant()">
        <thead>
          @for( headerGroup of table.getHeaderGroups(); track headerGroup.id) {
          <tr [attr.key]="headerGroup.id">
            @for (header of headerGroup.headers; track header.id) { @if
            (!header.isPlaceholder) {
            <th>
              <ng-container
                *flexRender="
                  header.column.columnDef.header;
                  props: header.getContext();
                  let header
                "
              >
                <div [innerHTML]="header"></div>
              </ng-container>
            </th>
            } }
          </tr>
          }
        </thead>
        <tbody>
          @for (row of table.getRowModel().rows; track row.id) {
          <tr
            [attr.key]="row.id"
            [attr.data-state]="row.getIsSelected() && 'selected'"
          >
            @for (cell of row.getVisibleCells(); track cell.id) {
            <td>
              <ng-container
                *flexRender="
                  cell.column.columnDef.cell;
                  props: cell.getContext();
                  let cell
                "
              >
                <div [innerHTML]="cell"></div>
              </ng-container>
            </td>
            }
          </tr>
          } @empty {
          <tr>
            <td class="text-center h-24" [attr.colspan]="columnsCount">
              No results.
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTablePaymentComponent {
  tableVariant = input(HlmTableVariantDefault);

  payments = signal<Payment[]>(payments);

  columnsCount = columns.length;

  table = createAngularTable(() => ({
    data: this.payments(),
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  }));
}
