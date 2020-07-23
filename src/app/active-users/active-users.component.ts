import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  activeCounter: number;

  constructor(private userService: UserService,
              private counterService: CounterService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
    this.activeCounter = this.counterService.activeSettedCounter;
    console.log('number initialized at: ' + this.activeCounter);
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    this.counterService.toInactiveCount();
    this.activeCounter = this.counterService.activeSettedCounter;
    console.log('number changed to: ' + this.activeCounter);
  }
}
