import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

    URL_GET_ALUMNO = this.PATH_BACKEND + "/api/Alumno"
    URL_GET_BY_ID_ALUMNO = this.PATH_BACKEND + "/api/Alumno/GetAlumnoById"
    URL_ADD_ALUMNO = this.PATH_BACKEND + "/api/Alumno/AddAlumno"
    URL_UPDATE_ALUMNO = this.PATH_BACKEND + "/api/Alumno/UpdateAlumno"
    URL_DELETE_ALUMNO = this.PATH_BACKEND + "/api/Alumno/DeleteAlumno"

    constructor(private http: HttpClient) { }

    public GetAlumno(): Observable<HttpResponse<any>> {

        return this.http
            .get<any>(this.URL_GET_ALUMNO,
                { observe: 'response' })
            .pipe();
    }

    public AddAlumno(entidad): Observable<HttpResponse<any>> {

        return this.http
            .post<any>(this.URL_ADD_ALUMNO, entidad,
                { observe: 'response' })
            .pipe();
    }

    public UpdateAlumno(entidad): Observable<HttpResponse<any>> {

        return this.http
            .post<any>(this.URL_UPDATE_ALUMNO, entidad,
                { observe: 'response' })
            .pipe();
    }

    public DeleteAlumno(item): Observable<HttpResponse<any>> {
    
        let params = new HttpParams();
        params = params.set('id', item.id);

        return this.http
            .post<any>(this.URL_DELETE_ALUMNO,  "", {params: params, observe: 'response' })
            .pipe();
    }
}
