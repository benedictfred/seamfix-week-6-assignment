import { Service } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Service({ autoProvided: false })
export class ColorService {
  color$ = new Subject<string>();

  // Replicating functionality using a BehaviorSubject
  // It holds the current value and emits it immediately to new subscribers
  behaviorColor$ = new BehaviorSubject<string>('blue');
}
