import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../../core/login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../../core/local-storage.service';
import { LoginApiInterface } from '../../../../domain/model/login/login-api-itnerface';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
	form: FormGroup = this.formBuilder.group({
		email: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	})

	constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService,
		private localStorage: LocalStorageService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	handleLogin(): void {
		if (this.form.valid) {
			const formvalue = Object.assign({}, this.form.getRawValue());
			this.loginService.login(formvalue).subscribe({
				next: (token: LoginApiInterface) => {
					console.log('realizou login!', token.data);
					this.localStorage.setItem('token', token.data as unknown as string);
					this.localStorage.setItem('user', formvalue.email)
					const url = `/dashboard`;
					this.router.navigate([url]).then((res: boolean) => res).catch((error) => console.error(error));
				}, error: (error: Error) => {
					console.error('Ocorreu um erro ao realizar login', error);
				}
			})
		}
	}
}
