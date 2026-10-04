import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ColorService } from './services/color.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgStyle } from '@angular/common';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgStyle],
  providers: [ColorService],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('yra');
  private colorService = inject(ColorService);
  bgColor = signal<string>('');

  constructor() {
    this.colorService.color$.pipe(takeUntilDestroyed()).subscribe({
      next: (value) => {
        this.bgColor.set(value);
      },
    });

    // Uncomment below to see the BehaviorSubject approach in action.
    // The main difference is that a BehaviorSubject provides the last emitted
    // color immediately upon subscription.
    // this.colorService.behaviorColor$.pipe(takeUntilDestroyed()).subscribe({
    //   next: (value) => {
    //     this.bgColor.set(value);
    //   },
    // });
  }

  changeColor(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.colorService.color$.next(target.value);

    // Replicating functionality: Update the BehaviorSubject as well
    this.colorService.behaviorColor$.next(target.value);
  }
}
