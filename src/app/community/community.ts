import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-community',
  styleUrl: './community.css',
  templateUrl: './community.html',
})
export class Community {
  message = signal<string>('Hello, Community');
}
