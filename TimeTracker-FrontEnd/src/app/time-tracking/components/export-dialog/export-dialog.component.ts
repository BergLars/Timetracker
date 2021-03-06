import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MatDatepickerModule, DateAdapter, MatDateFormats } from '@angular/material';
import { Userprofile } from '../../../interfaces';
import { LoginService } from '../../../login';
import moment from 'moment/src/moment';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { EntriesService } from '../entries/entries.service';

@Component({
	selector: 'app-export-dialog',
	templateUrl: './export-dialog.component.html',
	styleUrls: ['./export-dialog.component.scss']
})

export class ExportDialogComponent implements OnInit {
	public title: string;
	@Input() fromDate: any;
	@Input() toDate: any;
	public userID: any;
	public exportURL: string;
	@Input() users: Userprofile[] = [];
	public validDatePeriod: boolean;
	public baseUrl: string = environment.apiBaseUrl;
	@Input() validDate: boolean = false;
	model: any = {};

	constructor(
		public dialogRef: MatDialogRef<ExportDialogComponent>,
		public loginService: LoginService,
		public http: Http,
		public entriesService: EntriesService,
		public dateAdapter: DateAdapter<Date>) {
	}

	ngOnInit() {
		this.loadUsers();
	}

	public checkIfAdmin() {
		return this.loginService.isAdmin();
	}

	public readDates() {
		this.fromDate = moment(this.model.from.toISOString()).format('YYYY-MM-DD');
		this.toDate = moment(this.model.to.toISOString()).format('YYYY-MM-DD');
		this.userID = this.model.userprofile;
		if (this.userID === undefined) {
			alert("Please select a user!");
		} else {
		this.checkDates();
		}
	}

	public checkDates() {

			this.dialogRef.close();
			this.exportEntries();
		
	}

	loadUsers() {
		if (this.loginService.loggedIn()) {
			this.http.get(this.baseUrl + "/userprofile/all").map(res => res.json()).subscribe(
				results => {
					this.users = results;
				});
		} else {
			alert("Your token has expired. Please log in again!");
			this.dialogRef.close(true);
			this.entriesService.allEntriesAreLoaded();
		}
	}

	refreshExportURL(id) {
		if (!this.loginService.isAdmin()) {
			this.userID = id;
		}
		this.exportURL = this.baseUrl + "/export?fromDate=" +
			this.fromDate +
			"&toDate=" +
			this.toDate +
			"&userprofileID=" + this.userID;
		window.open(this.exportURL, '_blank');
	}

	refreshExportAllURL() {
		this.exportURL = this.baseUrl + "/export/all?fromDate=" +
			this.fromDate +
			"&toDate=" +
			this.toDate;
		window.open(this.exportURL, '_blank');
	}

	public exportEntries() {
		if (this.loginService.isAdmin()) {
			if (this.userID === 'all')
				this.refreshExportAllURL();
			this.refreshExportURL(this.userID);
		}
		else {
			let loggedUserID = this.loginService.getLoggedUserID();
			this.refreshExportURL(loggedUserID);
		}
	}
}