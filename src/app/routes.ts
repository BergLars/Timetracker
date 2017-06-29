// app.routes.ts

import { TimeTrackingComponent, EntriesComponent } from './time-tracking';
// import { TimeTrackingComponent, EntriesComponent, ExportComponent } from './time-tracking';
import { LoginComponent } from './login';
import { LoggedInGuard } from './logged-in-guard';
import { ProfileComponent } from './profile';

export const routes = [
	{ path: 'entries', component: TimeTrackingComponent },
	{ path: '', component: LoginComponent }
	// { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard] }, 
	// { path: 'export', component: ExportComponent },
	// { path: 'entries', component: EntriesComponent },
	// { path: 'logout', component: LogoutComponent },
	
];