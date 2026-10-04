import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  styleUrl: './events.css',
  templateUrl: './events.html',
})
export class Events {
  message = signal<string>('Hello, Events');
}
