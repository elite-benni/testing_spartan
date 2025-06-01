// src/app/directives/hlm-table-directives.ts
import {
  computed,
  Directive,
  inject,
  input,
  InjectionToken,
  ValueProvider,
  // Input, // No longer needed here as child directives won't have individual class inputs
} from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import type { ClassValue } from 'clsx';

// Configuration Interface and InjectionToken
export const HlmTableConfigToken = new InjectionToken<HlmTableVariant>(
  'HlmTableConfig',
);
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

export function provideHlmTableConfig(
  config: Partial<HlmTableVariant>,
): ValueProvider {
  return {
    provide: HlmTableConfigToken,
    useValue: { ...HlmTableVariantDefault, ...config },
  };
}

export function injectHlmTableConfig(): HlmTableVariant {
  return (
    inject(HlmTableConfigToken, { optional: true }) ?? HlmTableVariantDefault
  );
}

/**
 * Directive to apply Shadcn-like styling to a <table> element.
 * It resolves and provides base classes for its child table elements.
 */
@Directive({
  selector: 'table[hlm]',
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
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _globalOrDefaultConfig = injectHlmTableConfig();

  // Protected variant that resolves user input to a full HlmTableVariant
  protected readonly _variant = computed<HlmTableVariant>(() => {
    const globalOrDefaultConfig = this._globalOrDefaultConfig;
    const localInputConfig = this.userVariant();

    // Priority 1: Local input object
    if (
      typeof localInputConfig === 'object' &&
      localInputConfig !== null &&
      Object.keys(localInputConfig).length > 0
    ) {
      // Merge local input with the baseline provided by injectHlmTableConfig()
      // This ensures that properties not in localInputConfig still fall back to global/default values.
      return { ...globalOrDefaultConfig, ...localInputConfig };
    }
    // If localInputConfig is not a non-empty object (e.g., it's undefined, an empty object, or a string),
    // then the globalOrDefaultConfig (which is already the result of injected OR default) is used.
    return globalOrDefaultConfig;
  });

  // Computed class for the host <table> element
  protected readonly _computedClass = computed(() =>
    hlm(this._variant().table, this.userClass()),
  );

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
  selector: 'thead',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableHeaderDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true });
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly _computedClass = computed(() =>
    hlm(
      this._hlmTable ? this._hlmTable.hlmTableHead().trim() : '',
      this.userClass(),
    ),
  );
}

/**
 * Directive to apply Shadcn-like styling to a <tbody> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'tbody',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableBodyDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true });
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly _computedClass = computed(() =>
    hlm(
      this._hlmTable ? this._hlmTable.hlmTableBody().trim() : '',
      this.userClass(),
    ),
  );
}

/**
 * Directive to apply Shadcn-like styling to a <tfoot> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'tfoot',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableFooterDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true });
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly _computedClass = computed(() =>
    hlm(
      this._hlmTable ? this._hlmTable.hlmTableFoot().trim() : '',
      this.userClass(),
    ),
  );
}

/**
 * Directive to apply Shadcn-like styling to a <tr> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'tr',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableRowDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true });
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly _computedClass = computed(() =>
    hlm(
      this._hlmTable ? this._hlmTable.hlmTableTr().trim() : '',
      this.userClass(),
    ),
  );
}

/**
 * Directive to apply Shadcn-like styling to a <th> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'th',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableHeadDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true });
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly _computedClass = computed(() =>
    hlm(
      this._hlmTable ? this._hlmTable.hlmTableTh().trim() : '',
      this.userClass(),
    ),
  );
}

/**
 * Directive to apply Shadcn-like styling to a <td> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'td',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableCellDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true });
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly _computedClass = computed(() =>
    hlm(
      this._hlmTable ? this._hlmTable.hlmTableTd().trim() : '',
      this.userClass(),
    ),
  );
}

/**
 * Directive to apply Shadcn-like styling to a <caption> element
 * within an HlmTableDirective context.
 */
@Directive({
  selector: 'caption',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmTableCaptionDirective {
  private readonly _hlmTable = inject(HlmTableDirective, { optional: true });
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly _computedClass = computed(() =>
    hlm(
      this._hlmTable ? this._hlmTable.hlmTableCaption().trim() : '',
      this.userClass(),
    ),
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
