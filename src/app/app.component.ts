import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDemoComponentDirect } from './components/table-demo.component';
import {
  HlmTableVariant,
  provideHlmTableConfig,
} from './components/table.directives';
import { TableDemoComponentDirectGlobalconfig } from './components/table-demo-globalconfig.component';
import { DataTablePaymentComponent } from "./data-table/data-table.component";

const myLargeTable: Partial<HlmTableVariant> = {
  table: 'w-full caption-bottom text-lg',
  thead: '[&_tr]:border-b bg-primary',
  tbody: '[&_tr:last-child]:border-2',
  th: 'h-18 px-8 text-left align-middle font-medium text-white [&:has([role=checkbox])]:pr-0',
  td: 'p-8 align-middle [&:has([role=checkbox])]:pr-0',
};

interface Product {
  id: string;
  name: string;
  price: number;
}
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    TableDemoComponentDirect,
    TableDemoComponentDirectGlobalconfig,
    DataTablePaymentComponent
],
  providers: [provideHlmTableConfig(myLargeTable)],
  template: `
    <div class="flex align-middle items-center bg-primary w-full h-20">
      <div class="w-full text-center text-xl ">Hello Spartans!</div>
    </div>
    <div class="p-4 w-full text-center">Payment data table</div>
    <div class="p-4 flex justify-center">
      <div class="relative w-full max-w-3xl overflow-x-auto">
        <app-data-table-payment [tableVariant]="newYork" />
      </div>
    </div>
    <div class="p-4 w-full text-center">Default styled Table</div>
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

    <div class="p-4 w-full text-center">
      Global styled Table via provideHlmTableConfig
    </div>
    <div class="p-4 flex justify-center">
      <div class="relative w-full max-w-3xl overflow-x-auto">
        <app-table-demo-direct-globalconfig />
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
