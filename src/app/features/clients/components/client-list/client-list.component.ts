import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];

  constructor(private apiService: ApiService, private router:Router) {}

  ngOnInit(): void {
    this.getClients();
  }

  goToAddClient() {
    this.router.navigate(['/clients/create']);  // Cambia a la ruta correcta para el formulario de creación
  }

  onEdit(client: any) {
    // Redirige a la página de edición del cliente
    this.router.navigate(['/clients/create', client.id]);  // Cambia a la ruta correcta para editar
  }

  onDelete(client: any) {
    const confirmed = confirm(`¿Estás seguro de que deseas eliminar a ${client.name}?`);
    if (confirmed) {
      this.apiService.deleteClient(client.id).subscribe({
        next: () => {
          console.log('Cliente eliminado:', client);
          // Actualiza la lista de clientes después de eliminar
          this.getClients();
        },
        error: (err) => {
          console.error('Error al eliminar el cliente:', err);
        }
      });
    }
  }

  getClients(): void {
    this.apiService.getClients().subscribe((data: any) => {
      this.clients = data;
    });
  }
}
