import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '3-parentEnfant';
  public collection!: any;
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.collection = data.results;
      console.log(this.collection);
    });
  }
}
