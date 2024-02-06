import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SheetPreviewComponent } from './components/sheet-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SheetPreviewComponent],
  template: `
    <div class="flex align-middle  items-center bg-primary w-full h-20">
      <div class="w-full text-center text-xl ">Hello Spartans!</div>
    </div>
    <spartan-sheet-preview />
  `,
})
export class AppComponent {}
