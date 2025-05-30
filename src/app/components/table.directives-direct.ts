// src/app/directives/hlm-table-directives.ts
import { SelectorContext } from '@angular/compiler'; // Unused, but kept from original
import {
  computed,
  Directive,
  inject,
  input,
  // Input, // No longer needed here as child directives won't have individual class inputs
} from '@angular/core';
import { alertVariants } from '@spartan-ng/ui-alert-helm'; // Unused, but kept from original

// Configuration Interface and InjectionToken
export interface HlmTableVariant {
  table: string;
  thead: string;
  tbody: string;
  tfoot: string;
  tr: string;
  th: string;
  td: string;
  caption: string;
}

// Default Configuration
export const HlmTableVariantDefault: HlmTableVariant = {
  table: 'w-full caption-bottom text-sm',
  thead: '[&_tr]:border-b',
  tbody: '[&_tr:last-child]:border-0',
  tfoot: 'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
  tr: 'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
  th: 'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
  td: 'p-4 align-middle [&:has([role=checkbox])]:pr-0',
  caption: 'mt-4 text-sm text-muted-foreground',
};

/**
 * Directive to apply Shadcn-like styling to a <table> element.
 * It resolves and provides base classes for its child table elements.
 */
@Directive({
  selector: 'table[hlm]', // Applies to <table> elements with the 'hlm' attribute
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableDirective {
  // Input for table variant, aliased to 'hlm'
  public readonly userVariant = input<Partial<HlmTableVariant> | string>(
    {},
    { alias: 'hlm' },
  );

  // Protected variant that resolves user input to a full HlmTableVariant
  protected readonly _variant = computed<HlmTableVariant>(() => {
    const userVariant = this.userVariant();
    if (typeof userVariant === 'object') {
      return { ...HlmTableVariantDefault, ...userVariant };
    }
    // If userVariant is a string, it implies a named variant.
    // For this example, we'll assume HlmTableVariantDefault if it's not an object.
    // A more robust solution would look up named variants from a predefined map or service.
    return HlmTableVariantDefault;
  });

  // Computed class for the host <table> element
  protected readonly _computedClass = computed(() => this._variant().table);

  // Expose resolved base classes for child directives as signals
  public readonly hlmTableHead = computed(() => this._variant().thead);
  public readonly hlmTableBody = computed(() => this._variant().tbody);
  public readonly hlmTableFoot = computed(() => this._variant().tfoot);
  public readonly hlmTableTr = computed(() => this._variant().tr);
  public readonly hlmTableTh = computed(() => this._variant().th);
  public readonly hlmTableTd = computed(() => this._variant().td);
  public readonly hlmTableCaption = computed(() => this._variant().caption);
}

/**
 * Directive to apply Shadcn-like styling to a <thead> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'thead', // Simplified selector
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableHeaderDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true }); // Updated injection

  protected readonly _computedClass = computed(
    () => (this._hlmTable ? this._hlmTable.hlmTableHead().trim() : ''), // Simplified computed class
  );
}

/**
 * Directive to apply Shadcn-like styling to a <tbody> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'tbody', // Simplified selector
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableBodyDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true }); // Updated injection

  protected readonly _computedClass = computed(
    () => (this._hlmTable ? this._hlmTable.hlmTableBody().trim() : ''), // Simplified computed class
  );
}

/**
 * Directive to apply Shadcn-like styling to a <tfoot> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'tfoot', // Simplified selector
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableFooterDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true }); // Updated injection

  protected readonly _computedClass = computed(
    () => (this._hlmTable ? this._hlmTable.hlmTableFoot().trim() : ''), // Simplified computed class
  );
}

/**
 * Directive to apply Shadcn-like styling to a <tr> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'tr', // Simplified selector
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableRowDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true }); // Updated injection

  protected readonly _computedClass = computed(
    () => (this._hlmTable ? this._hlmTable.hlmTableTr().trim() : ''), // Simplified computed class
  );
}

/**
 * Directive to apply Shadcn-like styling to a <th> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'th', // Simplified selector
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableHeadDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true }); // Updated injection

  protected readonly _computedClass = computed(
    () => (this._hlmTable ? this._hlmTable.hlmTableTh().trim() : ''), // Simplified computed class
  );
}

/**
 * Directive to apply Shadcn-like styling to a <td> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'td', // Simplified selector
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableCellDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true }); // Updated injection

  protected readonly _computedClass = computed(
    () => (this._hlmTable ? this._hlmTable.hlmTableTd().trim() : ''), // Simplified computed class
  );
}

/**
 * Directive to apply Shadcn-like styling to a <caption> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'caption', // Simplified selector
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableCaptionDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true }); // Updated injection

  protected readonly _computedClass = computed(
    () => (this._hlmTable ? this._hlmTable.hlmTableCaption().trim() : ''), // Simplified computed class
  );
}

// Collection of all table directives for easier import and use in modules.
export const HLM_TABLE_DIRECTIVES = [
  HlmTableDirective,
  HlmTableHeaderDirective,
  HlmTableBodyDirective,
  HlmTableFooterDirective,
  HlmTableRowDirective,
  HlmTableHeadDirective,
  HlmTableCellDirective,
  HlmTableCaptionDirective,
] as const;
