// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; // Asegúrate de que la ruta sea correcta
import { ClientListComponent } from './features/clients/components/client-list/client-list.component'; // Ajusta según tu estructura
import {ClientCreateComponent} from './features/clients/components/client-create/client-create.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a login al inicio
  { path: 'login', component: LoginComponent }, // Ruta para el componente de login
  { path: 'clients', component: ClientListComponent }, // Ruta para la lista de clientes
  { path: 'clients/create', component: ClientCreateComponent },
  { path: 'clients/create/:id', component: ClientCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
