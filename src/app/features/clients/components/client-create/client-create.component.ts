import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Asegúrate de importar tu servicio API
import { ApiService } from 'src/app/core/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  isEditMode: boolean = false;
  client = {
    name: '',
    email: '',
    phone: ''
  };
  clientId: string | null = null; // Para almacenar el id del cliente

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute // Inyectar ActivatedRoute para obtener parámetros de la ruta
  ) { }

  ngOnInit(): void {
    // Obtener el id del cliente de la URL
    this.clientId = this.route.snapshot.paramMap.get('id');
    if (this.clientId) {
      // Si existe el id, cargar los datos del cliente
      this.apiService.getClientById(this.clientId).subscribe(data => {
        this.client = data; // Asignar los datos al objeto client
        this.isEditMode = true;
      }, error => {
        console.error('Error al cargar el cliente:', error);
      });
    }
  }

  onSubmit(clientForm: NgForm) {
    if (clientForm.valid) {
      if (this.clientId) {
        // Si hay un id, actualizar el cliente
        this.apiService.updateClient(this.clientId, this.client).subscribe(response => {
          console.log('Cliente actualizado exitosamente', response);

          this.router.navigate(['/clients']);  // Redirigir a la lista de clientes
        }, error => {
          console.error('Error al actualizar cliente:', error);
        });

      } else {
        // Si no hay id, crear un nuevo cliente
        this.apiService.createClient(this.client).subscribe(response => {
          console.log('Cliente agregado exitosamente', response);
          this.router.navigate(['/clients']);  // Redirigir a la lista de clientes
        }, error => {
          console.error('Error al agregar cliente:', error);
        });
      }
    }
  }
}
