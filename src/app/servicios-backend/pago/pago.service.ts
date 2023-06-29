import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

  URL_GET_PAGO = this.PATH_BACKEND + "/api/Pago"
  URL_GET_BY_ID_PAGO = this.PATH_BACKEND + "/api/Pago/GetPagoById"
  URL_ADD_PAGO = this.PATH_BACKEND + "/api/Pago/AddPago"
  URL_UPDATE_PAGO = this.PATH_BACKEND + "/api/Pago/UpdatePago"
  URL_DELETE_PAGO = this.PATH_BACKEND + "/api/Pago/DeletePago"

  constructor(private http: HttpClient) { }
  public GetPagos(): Observable<HttpResponse<any>> {

    return this.http
        .get<any>(this.URL_GET_PAGO,
            { observe: 'response' })
        .pipe();
  }

  public AddPago(entidad): Observable<HttpResponse<any>> {

      return this.http
          .post<any>(this.URL_ADD_PAGO, entidad,
              { observe: 'response' })
          .pipe();
  }

  public UpdatePago(entidad): Observable<HttpResponse<any>> {

      return this.http
          .post<any>(this.URL_UPDATE_PAGO, entidad,
              { observe: 'response' })
          .pipe();
  }

  public DeletePago(item): Observable<HttpResponse<any>> {
    
    let params = new HttpParams();
    params = params.set('id', item.id);

    return this.http
        .post<any>(this.URL_DELETE_PAGO,  "", {params: params, observe: 'response' })
        .pipe();
  }
}
