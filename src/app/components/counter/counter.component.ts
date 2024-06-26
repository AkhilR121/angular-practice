import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public count: number = 0;

  counter(counterType: string) {
    switch (counterType) {
      case 'inc': {
        this.count++;
        return this.count;
      }

      case 'dec': {
        this.count--;
        return this.count;
      }

      case 'reset': {
        this.count = 0;
        return this.count;
      }

      default:
        return;
    }
  }
}
