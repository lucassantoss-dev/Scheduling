import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	constructor() { }

	public success(message: string, title: string): void {
		this.showAlert(title, message, 'success');
	}
	public info(message: string, title: string): void {
		this.showAlert(title, message, 'info');
	}
	public error(message: string, title: string): void {
		this.showAlert(title, message, 'error');
	}

	public showAlert(
		title: string,
		message: string,
		icon: SweetAlertIcon,
	): void {
		Swal.fire(title, message, icon);
		Swal.fire({
			position: 'center',
			icon: icon,
			title: title,
			showConfirmButton: false,
			timer: 1000
		})
	}
}
