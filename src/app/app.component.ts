import { UserService } from './user.service';
import { Component } from '@angular/core';
import { CounterService } from './counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterService]
})
export class AppComponent {

}
