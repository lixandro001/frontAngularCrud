import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule

import { AppComponent } from './app.component';
import { ClientListComponent } from './features/clients/components/client-list/client-list.component';
import {ClientCreateComponent} from './features/clients/components/client-create/client-create.component';

import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module'; // Importa tu módulo de rutas

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientListComponent,
    ClientCreateComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule, // Agrega RouterModule aquí
    HttpClientModule, // Asegúrate de importar HttpClientModule aquí
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule, // Asegúrate de que este módulo también esté aquí
    MatCardModule, // Añade el módulo aquí
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
