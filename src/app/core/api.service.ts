import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Cambia esto a tu URL de API

  constructor(private http: HttpClient) { }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    console.log(token);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `${token}` : ''
    });
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials); // Asegúrate de que esta URL sea correcta
  }

  getClients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clients`, { headers: this.getAuthHeaders() });
  }

    // Método para obtener un cliente por su ID
    getClientById(id: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/clients/${id}`,{ headers: this.getAuthHeaders() } );
     }

  createClient(clientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients`, clientData, { headers: this.getAuthHeaders() });
  }

  updateClient(id: string, clientData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/clients/${id}`, clientData, { headers: this.getAuthHeaders() });
  }

  deleteClient(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clients/${id}`, { headers: this.getAuthHeaders() });
  }




}
