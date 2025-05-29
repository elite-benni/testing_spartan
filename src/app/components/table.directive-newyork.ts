// src/app/directives/hlm-table.directive.ts
import { Directive } from '@angular/core';

/**
 * Directive to apply Shadcn-like styling to a <table> element.
 *
 * Usage: <table hlmTable>...</table>
 */
@Directive({
  selector: 'table[hlm]',
  standalone: true,
  host: {
    class: 'w-full caption-bottom text-sm',
  },
})
export class HlmTableDirective {}

// src/app/directives/hlm-table-header.directive.ts

/**
 * Directive to apply Shadcn-like styling to a <thead> element.
 *
 * Usage: <thead hlmTableHeader>...</thead>
 */
@Directive({
  selector: 'thead[hlm]',
  standalone: true,
  host: {
    class: '[&_tr]:border-b',
  },
})
export class HlmTableHeaderDirective {}

// src/app/directives/hlm-table-body.directive.ts
/**
 * Directive to apply Shadcn-like styling to a <tbody> element.
 *
 * Usage: <tbody hlmTableBody>...</tbody>
 */
@Directive({
  selector: 'tbody[hlm]',
  standalone: true,
  host: {
    class: '[&_tr:last-child]:border-0',
  },
})
export class HlmTableBodyDirective {}

// src/app/directives/hlm-table-footer.directive.ts

/**
 * Directive to apply Shadcn-like styling to a <tfoot> element.
 *
 * Usage: <tfoot hlmTableFooter>...</tfoot>
 */
@Directive({
  selector: 'tfoot[hlm]',
  standalone: true,
  host: {
    class: 'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
  },
})
export class HlmTableFooterDirective {}

// src/app/directives/hlm-table-row.directive.ts

/**
 * Directive to apply Shadcn-like styling to a <tr> element.
 *
 * Usage: <tr hlmTableRow>...</tr>
 */
@Directive({
  selector: 'tr[hlm]',
  standalone: true,
  host: {
    class:
      'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
  },
})
export class HlmTableRowDirective {}

// src/app/directives/hlm-table-head.directive.ts

/**
 * Directive to apply Shadcn-like styling to a <th> element.
 *
 * Usage: <th hlmTableHead>...</th>
 */
@Directive({
  selector: 'th[hlm]',
  standalone: true,
  host: {
    class:
      'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
  },
})
export class HlmTableHeadDirective {}

// src/app/directives/hlm-table-cell.directive.ts

/**
 * Directive to apply Shadcn-like styling to a <td> element.
 *
 * Usage: <td hlmTableCell>...</td>
 */
@Directive({
  selector: 'td[hlm]',
  standalone: true,
  host: {
    class:
      'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
  },
})
export class HlmTableCellDirective {}

// src/app/directives/hlm-table-caption.directive.ts

/**
 * Directive to apply Shadcn-like styling to a <caption> element.
 *
 * Usage: <caption hlmTableCaption>...</caption>
 */
@Directive({
  selector: 'caption[hlm]',
  standalone: true,
  host: {
    class: 'text-muted-foreground mt-4 text-sm',
  },
})
export class HlmTableCaptionDirective {}
