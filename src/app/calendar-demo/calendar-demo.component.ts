import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'calendar-demo',
  templateUrl: './calendar-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./calendar-demo.component.scss']
})
export class CalendarDemoComponent implements OnInit, OnChanges {

  view: CalendarView = CalendarView.Week;

  viewDate: Date = new Date();

  @Input('events') events: CalendarEvent[];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // Can manage events change
  }
}
