import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-resources',
  styleUrl: './resources.css',
  templateUrl: './resources.html',
})
export class Resources {
  message = signal<string>('Hello, Resources');
}
