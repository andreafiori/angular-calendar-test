import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { addDays, addHours, startOfDay, setHours, setMinutes, subDays } from 'date-fns';

export const colors = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  doctors = [
    { id: 1, name: 'Mario', surname: 'Rossi' },
    { id: 2, name: 'Anna', surname: 'Verdi' },
    { id: 3, name: 'John', surname: 'Doe' },
    { id: 4, name: 'Antonio', surname: 'Gialli' },
    { id: 5, name: 'Carlo', surname: 'NotPlanned' },
    { id: 6, name: 'Paolo', surname: 'NotPlanned' },
  ];

  timeTables: CalendarEvent[] = [];

  onPlanning() {
    this.timeTables = [
      {
        start: startOfDay(new Date()),
        title: 'Orario operativo 1',
        color: colors.yellow,
      },
      {
        start: subDays(addHours(startOfDay(new Date()), 1), 2),
        title: 'Orario operativo 2',
        color: colors.red,
      },
      {
        start: addHours(startOfDay(new Date()), 2),
        // end: new Date(),
        title: 'Orario operativo 3',
        color: colors.blue,
      },
      {
        start: addDays(addHours(startOfDay(new Date()), 2), 2),
        end: addDays(new Date(), 2),
        title: 'Orario operativo 4',
        color: colors.red,
      },
      {
        title: 'Orario operativo 5',
        start: setHours(setMinutes(new Date(), 0), 5),
        color: colors.yellow,
      },
      {
        title: 'Orario operativo 6',
        start: subDays(addHours(startOfDay(new Date()), 2), 1),
        color: colors.yellow,
      },
    ];
  }
}
