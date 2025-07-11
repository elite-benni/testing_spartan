import { Component } from '@angular/core';

import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';
import { HlmSeparatorDirective } from '@spartan-ng/helm/separator';
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from '@spartan-ng/helm/avatar';
import { HlmSelectTriggerComponent } from '../../libs/ui/ui-select-helm/src/lib/hlm-select-trigger.component';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';

interface Product {
  id: string;
  name: string;
  price: number;
}
@Component({
  selector: 'app-root',
  imports: [
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
    BrnSelectImports,
    HlmSelectImports,
  ],
  host: { class: 'flex flex-col' },
  template: `
    <div class="flex align-middle bg-gray items-center bg-primary w-full h-20">
      <div class="w-full text-center text-xl">Hello 2 Spartans!</div>
      <div class="px-4">
        <hlm-avatar variant="large">
          <img
            src="/assets/avatar.png"
            alt="spartan logo. Resembling a spartanic shield"
            hlmAvatarImage
          />
          <span class="bg-background text-foreground" hlmAvatarFallback
            >LI</span
          >
        </hlm-avatar>
      </div>
    </div>

    <brn-select class="inline-block" placeholder="Select an option">
      <hlm-select-trigger class="w-56">
        <hlm-select-value />
      </hlm-select-trigger>
      <hlm-select-content>
        <hlm-option value="Refresh">Refresh</hlm-option>
        <hlm-option value="Settings">Settings</hlm-option>
        <hlm-option value="Help">Help</hlm-option>
        <hlm-option value="Signout">Sign out</hlm-option>
      </hlm-select-content>
    </brn-select>
  `,
})
export class AppComponent {}
