import { ColumnDef } from '@tanstack/angular-table';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: () => '<div class="text-right">Amount</div>',
    cell: (info) => {
      const amount = parseFloat(info.getValue<string>());
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return `<div class="text-right">${formatted}</div>`;
    },
  },
];
