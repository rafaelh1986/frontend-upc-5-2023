import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {
  
  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

  URL_GET_CARRITOCOMPRA = this.PATH_BACKEND + "/api/CarritoCompra"
  URL_GET_BY_ID_CARRITOCOMPRA = this.PATH_BACKEND + "/api/CarritoCompra/GetCarritoCompraById"
  URL_ADD_CARRITOCOMPRA = this.PATH_BACKEND + "/api/CarritoCompra/AddCarritoCompra"
  URL_UPDATE_CARRITOCOMPRA = this.PATH_BACKEND + "/api/CarritoCompra/UpdateCarritoCompra"
  URL_DELETE_CARRITOCOMPRA = this.PATH_BACKEND + "/api/CarritoCompra/DeleteCarritoCompra"

  constructor(private http: HttpClient) { }

  public GetCarritoCompra(): Observable<HttpResponse<any>> {

      return this.http
          .get<any>("https://localhost:7127/api/CarritoCompra",
              { observe: 'response' })
          .pipe();
  }

  public AddCarritoCompra(entidad): Observable<HttpResponse<any>> {

      return this.http
          .post<any>(this.URL_ADD_CARRITOCOMPRA, entidad,
              { observe: 'response' })
          .pipe();
  }
}
