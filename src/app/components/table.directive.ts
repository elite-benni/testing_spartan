// src/app/directives/hlm-table-directives.ts
import { Directive } from '@angular/core'; // Only one import for Directive needed

/**
 * Directive to apply Shadcn-like styling to a <table> element.
 * Note: The Shadcn `Table` component also wraps the table in a `div` for `overflow-auto`.
 * For Angular, you'd typically add that `div` directly in your template, as this directive
 * only applies classes to the `<table>` host element itself.
 *
 * Usage: <table hlm>...</table>
 */
@Directive({
  selector: 'table[hlm]', // Applies only to <table> elements with the hlm attribute
  standalone: true,
  host: {
    class: 'w-full caption-bottom text-sm',
  },
})
export class HlmTableDirective {}

/**
 * Directive to apply Shadcn-like styling to a <thead> element.
 *
 * Usage: <thead hlm>...</thead>
 */
@Directive({
  selector: 'thead[hlm]', // Applies only to <thead> elements with the hlm attribute
  standalone: true,
  host: {
    class: '[&_tr]:border-b',
  },
})
export class HlmTableHeaderDirective {}

/**
 * Directive to apply Shadcn-like styling to a <tbody> element.
 *
 * Usage: <tbody hlm>...</tbody>
 */
@Directive({
  selector: 'tbody[hlm]', // Applies only to <tbody> elements with the hlm attribute
  standalone: true,
  host: {
    class: '[&_tr:last-child]:border-0',
  },
})
export class HlmTableBodyDirective {}

/**
 * Directive to apply Shadcn-like styling to a <tfoot> element.
 *
 * Usage: <tfoot hlm>...</tfoot>
 */
@Directive({
  selector: 'tfoot[hlm]', // Applies only to <tfoot> elements with the hlm attribute
  standalone: true,
  host: {
    class: 'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
  },
})
export class HlmTableFooterDirective {}

/**
 * Directive to apply Shadcn-like styling to a <tr> element.
 *
 * Usage: <tr hlm>...</tr>
 */
@Directive({
  selector: 'tr[hlm]', // Applies only to <tr> elements with the hlm attribute
  standalone: true,
  host: {
    class:
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
  },
})
export class HlmTableRowDirective {}

/**
 * Directive to apply Shadcn-like styling to a <th> element.
 *
 * Usage: <th hlm>...</th>
 */
@Directive({
  selector: 'th[hlm]', // Applies only to <th> elements with the hlm attribute
  standalone: true,
  host: {
    class:
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
  },
})
export class HlmTableHeadDirective {}

/**
 * Directive to apply Shadcn-like styling to a <td> element.
 *
 * Usage: <td hlm>...</td>
 */
@Directive({
  selector: 'td[hlm]', // Applies only to <td> elements with the hlm attribute
  standalone: true,
  host: {
    class: 'p-4 align-middle [&:has([role=checkbox])]:pr-0',
  },
})
export class HlmTableCellDirective {}

/**
 * Directive to apply Shadcn-like styling to a <caption> element.
 *
 * Usage: <caption hlm>...</caption>
 */
@Directive({
  selector: 'caption[hlm]', // Applies only to <caption> elements with the hlm attribute
  standalone: true,
  host: {
    class: 'mt-4 text-sm text-muted-foreground',
  },
})
export class HlmTableCaptionDirective {}
