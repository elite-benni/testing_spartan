import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HlmButtonDirective],
  template: ` <div
      class="flex align-middle  items-center bg-primary w-full h-20"
    >
      <div class="w-full text-center text-xl ">Hello Spartans!</div>
    </div>
    <div class="p-4">
      <button hlmBtn variant="outline">Hello</button>
    </div>`,
})
export class AppComponent {}
