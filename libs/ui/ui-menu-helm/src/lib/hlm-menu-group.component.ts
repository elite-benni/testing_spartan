import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrnMenuGroupDirective } from '@spartan-ng/brain/menu';

@Component({
	selector: 'hlm-menu-group',
	host: {
		class: 'block',
	},
	hostDirectives: [BrnMenuGroupDirective],
	template: `
		<ng-content />
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HlmMenuGroupComponent {}
