import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HlmTableDirective,
  HlmTableVariantDefault,
  provideHlmTableConfig, // Use the new provider function
  HlmTableVariant,
  // HLM_TABLE_CONFIG is no longer needed directly, nor is HlmTableConfigToken for these tests
} from './table.directives';

// Helper component to test the directive
@Component({
  template: `<table [hlm]="variantInput" #testTable></table>`,
  standalone: true,
  imports: [HlmTableDirective], // HlmTableDirective is standalone
})
class TestHostComponent {
  @ViewChild('testTable', { read: HlmTableDirective, static: true })
  tableDirectiveInstance!: HlmTableDirective;

  variantInput: Partial<HlmTableVariant> | string | undefined = undefined;

  getAppliedVariant(): HlmTableVariant {
    return (this.tableDirectiveInstance as any)._variant();
  }
}

describe('HlmTableDirective Configuration Priority', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  const defaultConf: HlmTableVariant = HlmTableVariantDefault;
  const globalConfPartial: Partial<HlmTableVariant> = {
    table: 'global-table-class',
    th: 'global-th-class',
  };
  const inputConfPartial: Partial<HlmTableVariant> = {
    table: 'input-table-class',
    td: 'input-td-class',
  };

  function setupTestBedAndDetectChanges(
    providers: any[] = [],
    variantInput?: Partial<HlmTableVariant> | string,
  ) {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: providers,
    });
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    if (variantInput !== undefined) {
      component.variantInput = variantInput;
    }
    fixture.detectChanges();
  }

  it('should use userVariant input (object) when provided; this merges with defaults and overrides global config', () => {
    setupTestBedAndDetectChanges(
      [provideHlmTableConfig(globalConfPartial)], // Updated provider
      inputConfPartial,
    );
    const appliedVariant = component.getAppliedVariant();

    expect(appliedVariant.table).toBe(inputConfPartial.table!);
    expect(appliedVariant.td).toBe(inputConfPartial.td!);
    expect(appliedVariant.th).toBe(globalConfPartial.th!); // Corrected expectation
    expect(appliedVariant.caption).toBe(defaultConf.caption);
  });

  it('should use global HLM_TABLE_CONFIG when userVariant (object) is not provided or is empty, merging with defaults', () => {
    setupTestBedAndDetectChanges([provideHlmTableConfig(globalConfPartial)]); // Updated provider
    const appliedVariant = component.getAppliedVariant();

    expect(appliedVariant.table).toBe(globalConfPartial.table!);
    expect(appliedVariant.th).toBe(globalConfPartial.th!);
    expect(appliedVariant.tbody).toBe(defaultConf.tbody);
    expect(appliedVariant.caption).toBe(defaultConf.caption);
  });

  it('should use HlmTableVariantDefault when neither userVariant (object) nor global config is provided', () => {
    setupTestBedAndDetectChanges();
    const appliedVariant = component.getAppliedVariant();

    expect(appliedVariant.table).toBe(defaultConf.table);
    expect(appliedVariant.th).toBe(defaultConf.th);
    expect(appliedVariant.caption).toBe(defaultConf.caption);
  });

  it('should use global HLM_TABLE_CONFIG when userVariant is an empty object (treated as no specific input override)', () => {
    setupTestBedAndDetectChanges(
      [provideHlmTableConfig(globalConfPartial)], // Updated provider
      {},
    );
    const appliedVariant = component.getAppliedVariant();

    expect(appliedVariant.table).toBe(globalConfPartial.table!);
    expect(appliedVariant.th).toBe(globalConfPartial.th!);
    expect(appliedVariant.tbody).toBe(defaultConf.tbody);
  });

  it('should use global config if userVariant is a string and global config exists', () => {
    setupTestBedAndDetectChanges(
      [provideHlmTableConfig(globalConfPartial)], // Updated provider
      'some-string-variant',
    );
    const appliedVariant = component.getAppliedVariant();
    expect(appliedVariant.table).toBe(globalConfPartial.table!);
    expect(appliedVariant.th).toBe(globalConfPartial.th!);
  });

  it('should use default config if userVariant is a string and no global config exists', () => {
    setupTestBedAndDetectChanges([], 'some-string-variant');
    const appliedVariant = component.getAppliedVariant();
    expect(appliedVariant.table).toBe(defaultConf.table);
    expect(appliedVariant.th).toBe(defaultConf.th);
  });
});
