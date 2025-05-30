import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
  HlmTableBodyDirective,
  HlmTableCaptionDirective,
  HlmTableCellDirective,
  HlmTableDirective,
  HlmTableHeadDirective,
  HlmTableHeaderDirective,
  HlmTableRowDirective,
} from './components/table.directives';
import { TableDemoComponentDirect } from './components/table-demo-direct.component';
import { HlmTableVariant } from './components/table.directives-direct';

interface Product {
  id: string;
  name: string;
  price: number;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule, HlmButtonDirective, TableDemoComponentDirect],
  template: `
    <div class="flex align-middle  items-center bg-primary w-full h-20">
      <div class="w-full text-center text-xl ">Hello Spartans!</div>
    </div>
    <div class="p-4">
      <button hlmBtn variant="outline">Hello Helm Button</button>
    </div>
    <div class="p-4 flex justify-center">
      <div class="relative w-full max-w-3xl overflow-x-auto">
        <app-table-demo-direct />
      </div>
    </div>

    <div class="p-4 w-full text-center">New York styled Table</div>
    <div class="p-4 flex justify-center">
      <div class="relative w-full max-w-3xl overflow-x-auto">
        <app-table-demo-direct [tableVariant]="newYork" />
      </div>
    </div>
  `,
})
export class AppComponent {
  newYork: HlmTableVariant = {
    table: 'w-full caption-bottom text-sm',
    thead: '[&_tr]:border-b',
    tbody: '[&_tr:last-child]:border-0',
    tfoot: 'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
    tr: 'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
    th: 'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    td: 'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    caption: 'text-muted-foreground mt-4 text-sm',
  };
  products: Product[] = [
    { id: 'P001', name: 'Laptop Pro', price: 1200.0 },
    { id: 'P002', name: 'Wireless Mouse', price: 25.5 },
    { id: 'P003', name: 'Mechanical Keyboard', price: 99.99 },
    { id: 'P004', name: 'USB-C Hub', price: 45.0 },
  ];
}
