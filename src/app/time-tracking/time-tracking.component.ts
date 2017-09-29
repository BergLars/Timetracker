import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { CreateDialogService } from '../time-tracking/components/create-dialog/create-dialog.service';
import { ExportDialogService } from '../time-tracking/components/export-dialog/export-dialog.service';
import { EditDialogService } from '../time-tracking/components/edit-dialog/edit-dialog.service';

import { Router } from '@angular/router';
import moment from 'moment/src/moment';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss']
})
export class TimeTrackingComponent implements OnInit {

  public isLoading: Boolean = false;

  public currentDate: any;


  constructor(
    private createDialogService: CreateDialogService,
    private exportDialogService: ExportDialogService,
    private editDialogService: EditDialogService,
    private router: Router,
    private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.isLoading = false;
    this.currentDate = moment().format('LL');
    this.checkIfLoggedIn();
  }
  public openCreateDialog() {
    this.createDialogService
      .confirm('Create', this.viewContainerRef)
      .subscribe(res => {
        if (res) {

        }
      });
  }

  public openEditDialog() {
    this.editDialogService
      .confirm('Edit', this.viewContainerRef)
      .subscribe(res => {
        if (res) {

        }
      });
  }

  public openExportDialog() {
    this.exportDialogService
      .confirm('Export', this.viewContainerRef);
  }

  checkIfLoggedIn() {
    if (localStorage.getItem('Authorization')) {
    }
    else {
      this.router.navigate(['']);
    }
  }
}
