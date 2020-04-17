import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Quotes } from '../../shared/quotes';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DataServiceService {

	public static API_CONFIG = 'api';
	public pageSize = 5;
	baseUrl: string = environment.url;
	apiURL: string = this.baseUrl;
	ssoURL: string = environment.SSO_URL;
	logOutUrl: string = environment.logOutUrl;
	public callLocalJson = environment.callLocalJson;
	public user: any;

	public isValidUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(private httpClient: HttpClient) {
	}

	public accountDetails = "/assets/data/accountDetails.json";
	public getUserRoles = "/assets/data/getUserRoles.json";


	public getLoggedInUserInfo() {
		if (this.callLocalJson) {
			return this.httpClient.get<any>(`${this.accountDetails}`);
		} else {
			return this.httpClient.get(`${this.ssoURL}/get/accountDetails`);
		}
	}

	checkAuthenticationAsPromise(): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			this.getLoggedInUserInfo()
				.subscribe(
				response => {
					this.user = response;
					if (response) {
						if (this.callLocalJson) {
							this.httpClient.get<any>(`${this.getUserRoles}`).subscribe(
							response => {
								this.user.userRoll = response;
								this.isValidUser.next(true);
								resolve(this.user);
							}, function (err) {
								resolve(this.user);
							});
						}
					}
				}, function (err) {
					resolve(this.user);
				});
		});
	}
}
