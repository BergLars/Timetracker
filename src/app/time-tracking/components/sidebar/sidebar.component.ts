import { Component, OnInit, Input } from '@angular/core';
import { ITimeTrackingEntry, RegistryService, TimespentService } from '../../../data';
import moment from 'moment/src/moment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() items: ITimeTrackingEntry[] = [];

  @Input() totalTimeSpent: any;
  public total: string;
  @Input() totalHoursWorkedW: any;
  @Input() totalHoursWorkedM: any;
  @Input() currentMonth: any;
  @Input() weekNumber: any;

  constructor(public registryService: RegistryService, public timespentService: TimespentService) {
    this.registryService.sidebarComponent = this;
  }
  ngOnInit() {
    this.total = 'Total';
  }

  getNextWeekStart() {
    var today = moment();
    //edited part
    var daystoMonday = 0 - (today.isoWeekday() - 1) + 7;
    var nextMonday = today.subtract('days', daystoMonday);

    return nextMonday;
  }

  getNextWeekEnd() {
    var nextMonday = this.getNextWeekStart();
    var nextSunday = nextMonday.add('days', 6);

    return nextSunday;
  }

  getLastWeekStart() {
    var today = moment();
    var daystoLastMonday = 0 - (1 - today.isoWeekday()) + 7;

    var lastMonday = today.subtract('days', daystoLastMonday);

    return lastMonday;
  }

  getLastWeekEnd() {
    var lastMonday = this.getLastWeekStart();
    var lastSunday = lastMonday.add('days', 6);

    return lastSunday;
  }
}
