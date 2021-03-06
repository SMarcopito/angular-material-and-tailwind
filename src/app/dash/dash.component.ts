import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '1° item', cols: 2, rows: 1 },
          { title: '2° item', cols: 1, rows: 1 },
          { title: '3° item', cols: 1, rows: 2 },
          { title: '4° item', cols: 1, rows: 1 },
          { title: '5° item', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: '1° item', cols: 2, rows: 1 },
        { title: '2° item', cols: 1, rows: 1 },
        { title: '3° item', cols: 1, rows: 2 },
        { title: '4° item', cols: 1, rows: 1 },
        { title: '5° item', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
