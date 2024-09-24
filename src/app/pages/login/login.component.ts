
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ApiService } from '../../core/api.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
// })
// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private apiService: ApiService,
//     private router: Router
//   ) {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.loginForm.valid) {
//       this.apiService.login(this.loginForm.value).subscribe((response: any) => {
//         localStorage.setItem('token', response.token);
//         this.router.navigate(['/clients']);
//       }, error => {
//         console.error('Error en el login', error);
//       });
//     }
//   }
// }


// src/app/pages/login/login.component.ts



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/clients']); // Cambia a la ruta de clientes después de iniciar sesión
      }, error => {
        console.error('Error en el login', error);
      });
    }
  }
}
