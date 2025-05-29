// src/app/components/table-demo/table-demo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HlmTableBodyDirective,
  HlmTableCaptionDirective,
  HlmTableCellDirective,
  HlmTableDirective,
  HlmTableFooterDirective,
  HlmTableHeadDirective,
  HlmTableHeaderDirective,
  HlmTableRowDirective,
} from './table.directive';

// Import all the HLM table directives with their updated selectors

// Define the interface for the invoice data
interface Invoice {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}

@Component({
  selector: 'app-table-demo',
  standalone: true,
  imports: [
    CommonModule,
    // List all HLM table directives used in the template
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
      <div class="relative w-full overflow-x-auto">
        <table hlm>
          <caption hlm>
            A list of your recent invoices.
          </caption>
          <thead hlm>
            <tr hlm>
              <th hlm class="w-[100px]">Invoice</th>
              <th hlm>Status</th>
              <th hlm>Method</th>
              <th hlm class="text-right">Amount</th>
            </tr>
          </thead>
          <tbody hlm>
            @for (invoice of invoices; track invoice.invoice) {
              <tr hlm>
                <td hlm class="font-medium">{{ invoice.invoice }}</td>
                <td hlm>{{ invoice.paymentStatus }}</td>
                <td hlm>{{ invoice.paymentMethod }}</td>
                <td hlm class="text-right">{{ invoice.totalAmount }}</td>
              </tr>
            }
          </tbody>
          <tfoot hlm>
            <tr hlm>
              <td hlm [attr.colSpan]="3">Total</td>
              <td hlm class="text-right">$2,500.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `,
  // No styles array here, as requested.
  styles: [],
})
export class TableDemoComponent {
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
