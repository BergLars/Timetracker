import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordDialogService } from './components/password-dialog/password-dialog.service';
import { PasswordDialogComponent } from './components/password-dialog/password-dialog.component';
import { LoginService } from '../login';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	constructor(
		private router: Router,
		private passwordDialogService: PasswordDialogService,
		private viewContainerRef: ViewContainerRef,
		private loginService: LoginService
	) { }

	ngOnInit() {
	}

	public openDialog() {
		if (this.loginService.loggedIn()) {
			this.passwordDialogService.confirm('Update password', this.viewContainerRef);
		} else {
			alert("Your token has expired. Please log in again!");
      		this.loginService.logout();
		}
	}

	public logout() {
		this.loginService.logout();
	}
}