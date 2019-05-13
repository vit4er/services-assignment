import { CounterService } from "./counter.service";
import {Injectable} from "@angular/core";

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {};

  triggerUserStatus(id: number, status: string) {
    switch (status) {
      case "active": {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.IncAICount();
      } break;
      case "inactive": {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.IncIACount();
      } break;
    }
  }
}
