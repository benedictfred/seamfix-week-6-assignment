import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-programmes',
  styleUrl: './programmes.css',
  templateUrl: './programmes.html',
})
export class Programmes {
  message = signal<string>('Hello, Programmes');
}
