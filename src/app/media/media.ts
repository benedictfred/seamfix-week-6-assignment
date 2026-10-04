import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-media',
  styleUrl: './media.css',
  templateUrl: './media.html',
})
export class Media {
  message = signal<string>('Hello, Media');
}
