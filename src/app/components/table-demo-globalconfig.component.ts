// src/app/components/table-demo/table-demo.component.ts
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HlmTableBodyDirective,
  HlmTableCaptionDirective,
  HlmTableCellDirective,
  HlmTableFooterDirective,
  HlmTableHeaderDirective,
  HlmTableRowDirective,
  HlmTableDirective,
  HlmTableHeadDirective,
} from './table.directives';

// Define the interface for the invoice data
interface Invoice {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}

@Component({
  selector: 'app-table-demo-direct-globalconfig',
  standalone: true,
  imports: [
    CommonModule,
    // List all  table directives used in the template
    HlmTableDirective,
    HlmTableHeaderDirective,
    HlmTableBodyDirective,
    HlmTableFooterDirective,
    HlmTableRowDirective,
    HlmTableHeadDirective,
    HlmTableCellDirective,
    HlmTableCaptionDirective,
  ],
  template: `
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-4">
        Table with Global/Default Variant
      </h2>
      <div class="relative w-full overflow-x-auto">
        <table hlm>
          <caption>
            Another list of your recent invoices (global/default variant).
          </caption>
          <thead>
            <tr>
              <th class="w-[100px]">Invoice ID</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th class="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            @for (invoice of invoices; track invoice.invoice + '-global') {
              <tr>
                <td class="font-medium">{{ invoice.invoice }}</td>
                <td>{{ invoice.paymentStatus }}</td>
                <td>{{ invoice.paymentMethod }}</td>
                <td class="text-right">{{ invoice.totalAmount }}</td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr>
              <td [attr.colSpan]="3">Total Sum</td>
              <td class="text-right">$2,500.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `,
})
export class TableDemoComponentDirectGlobalconfig {
  invoices: Invoice[] = [
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      totalAmount: '$250.00',
      paymentMethod: 'Credit Card',
    },
    {
      invoice: 'INV002',
      paymentStatus: 'Pending',
      totalAmount: '$150.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      totalAmount: '$350.00',
      paymentMethod: 'Bank Transfer',
    },
    {
      invoice: 'INV004',
      paymentStatus: 'Paid',
      totalAmount: '$450.00',
      paymentMethod: 'Credit Card',
    },
    {
      invoice: 'INV005',
      paymentStatus: 'Paid',
      totalAmount: '$550.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV006',
      paymentStatus: 'Pending',
      totalAmount: '$200.00',
      paymentMethod: 'Bank Transfer',
    },
    {
      invoice: 'INV007',
      paymentStatus: 'Unpaid',
      totalAmount: '$300.00',
      paymentMethod: 'Credit Card',
    },
  ];
}
