import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const reminders = [
      { id: 1, client: 'Piet', task: 'Ontbijt', time: '10:00 AM', info: "moet ontbijten voor ", completed: false },
      { id: 2, client: 'Jan', task: 'Douchen', time: '07:00 AM', info: "moet douchen voor", completed: false },
      { id: 3, client: 'Motherfucker', task: 'Sport', time: '07:30 PM', info: "moet sporten om", completed: false }
      // { id: 4, client: '', task: 'Ontbijt', time: '10:00 AM', info: "Ontbijt voor Piet" },
      // { id: 5, client: '', task: 'Ontbijt', time: '10:00 AM', info: "Ontbijt voor Piet" },
      // { id: 6, client: '', task: 'Ontbijt', time: '10:00 AM', info: "Ontbijt voor Piet" },
      // { id: 7, client: '', task: 'Ontbijt', time: '10:00 AM', info: "Ontbijt voor Piet" },
      // { id: 8, client: '', task: 'Ontbijt', time: '10:00 AM', info: "Ontbijt voor Piet" },
      // { id: 9, client: '', task: 'Ontbijt', time: '10:00 AM', info: "Ontbijt voor Piet" },
      // { id: 10, client: '', task: 'Ontbijt', time: '10:00 AM', info: "Ontbijt voor Piet" },
    ];
    return {reminders};
  }
}