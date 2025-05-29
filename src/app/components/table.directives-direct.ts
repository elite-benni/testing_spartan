// src/app/directives/hlm-table-directives.ts
import { Directive } from '@angular/core';

/**
 * Directive to apply Shadcn-like styling to a <table> element.
 * Applies automatically to all <table> tags imported in a module.
 */
@Directive({
  selector: 'table', // Applies to all <table> elements
  // standalone: false (removed, default is false)
  host: {
    class: 'w-full caption-bottom text-sm',
  },
})
export class HlmTableDirective {}

/**
 * Directive to apply Shadcn-like styling to a <thead> element.
 * Applies automatically to all <thead> tags imported in a module.
 */
@Directive({
  selector: 'thead', // Applies to all <thead> elements
  // standalone: false (removed, default is false)
  host: {
    class: '[&_tr]:border-b',
  },
})
export class HlmTableHeaderDirective {}

/**
 * Directive to apply Shadcn-like styling to a <tbody> element.
 * Applies automatically to all <tbody> tags imported in a module.
 */
@Directive({
  selector: 'tbody', // Applies to all <tbody> elements
  // standalone: false (removed, default is false)
  host: {
    class: '[&_tr:last-child]:border-0',
  },
})
export class HlmTableBodyDirective {}

/**
 * Directive to apply Shadcn-like styling to a <tfoot> element.
 * Applies automatically to all <tfoot> tags imported in a module.
 */
@Directive({
  selector: 'tfoot', // Applies to all <tfoot> elements
  // standalone: false (removed, default is false)
  host: {
    class: 'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
  },
})
export class HlmTableFooterDirective {}

/**
 * Directive to apply Shadcn-like styling to a <tr> element.
 * Applies automatically to all <tr> tags imported in a module.
 */
@Directive({
  selector: 'tr', // Applies to all <tr> elements
  // standalone: false (removed, default is false)
  host: {
    class:
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
  },
})
export class HlmTableRowDirective {}

/**
 * Directive to apply Shadcn-like styling to a <th> element.
 * Applies automatically to all <th> tags imported in a module.
 */
@Directive({
  selector: 'th', // Applies to all <th> elements
  // standalone: false (removed, default is false)
  host: {
    class:
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
  },
})
export class HlmTableHeadDirective {}

/**
 * Directive to apply Shadcn-like styling to a <td> element.
 * Applies automatically to all <td> tags imported in a module.
 */
@Directive({
  selector: 'td', // Applies to all <td> elements
  // standalone: false (removed, default is false)
  host: {
    class: 'p-4 align-middle [&:has([role=checkbox])]:pr-0',
  },
})
export class HlmTableCellDirective {}

/**
 * Directive to apply Shadcn-like styling to a <caption> element.
 * Applies automatically to all <caption> tags imported in a module.
 */
@Directive({
  selector: 'caption', // Applies to all <caption> elements
  // standalone: false (removed, default is false)
  host: {
    class: 'mt-4 text-sm text-muted-foreground',
  },
})
export class HlmTableCaptionDirective {}
