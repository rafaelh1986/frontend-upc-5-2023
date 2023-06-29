import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AlumnoService } from '../servicios-backend/alumno/alumno.service';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page {

  public listAlumno = [];
    public idAlumno = ""
    public nombreCompleto = ""
    public curso = ""
    public gestion = ""
    public swGuardarCambios = false

    constructor(public navCtrl: NavController,
        private alumnoServices: AlumnoService) {
        this.GetAlumno();
    }

    private GetAlumno() {
        this.alumnoServices.GetAlumno().subscribe({
            next: (response: HttpResponse<any>) => {
                this.listAlumno = response.body;
                //console.log(this.listAlumno)
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete - this.GetAlumno()');
            },
        });
    }

    public addAlumno() {
        if (this.nombreCompleto.length > 0 && this.curso.length > 0 && this.gestion.length > 0) {
            var entidad = {
                nombreCompleto : this.nombreCompleto,
                curso : this.curso,
                gestion : this.gestion
            }
            console.log(entidad)
            this.alumnoServices.AddAlumno(entidad).subscribe({
                next: (response: HttpResponse<any>) => {
                    console.log(response.body)//1
                    if(response.body == 1){
                        alert("Se agrego el alumno con exito :)");
                        this.GetAlumno();//Se actualize el listado
                        this.nombreCompleto = "";
                        this.curso = "";
                        this.gestion = "";
                    }else{
                        alert("Al agregar el alumno falló :(");
                    }
                },
                error: (error: any) => {
                    console.log(error);
                },
                complete: () => {
                    console.log('complete - this.addAlumno()');
                },
            });
        }
    }

    public guardarCambios(){
        this.swGuardarCambios = false;
        if (this.nombreCompleto.length > 0) {
            var entidad = {
                id: this.idAlumno,
                nombreCompleto : this.nombreCompleto,
                curso : this.curso,
                gestion : this.gestion
            }
            console.log(entidad)
            this.alumnoServices.UpdateAlumno(entidad).subscribe({
                next: (response: HttpResponse<any>) => {
                    console.log(response.body)//1
                    if(response.body == 1){
                        alert("Se modifico el Alumno con exito :)");
                        this.GetAlumno();//Se actualize el listado
                        this.idAlumno = "";
                        this.nombreCompleto = "";
                        this.curso = "";
                        this.gestion = "";
                    }else{
                        alert("Al modificar el alumno falló :(");
                    }
                },
                error: (error: any) => {
                    console.log(error);
                },
                complete: () => {
                    console.log('complete - this.guardarCambios()');
                },
            });
        }
    }

    public updateAlumno(item){
        console.log(item)
        this.idAlumno = item.id
        this.nombreCompleto = item.nombreCompleto
        this.curso = item.curso
        this.gestion = item.gestion
        this.swGuardarCambios = true;
    }

    public deleteAlumno(item){
        console.log(item.id)
        this.alumnoServices.DeleteAlumno(item).subscribe({
            next: (response: HttpResponse<any>) => {
                console.log(response.body)//1
                if(response.body == 1){
                    alert("Se elimino el alumno con exito :)");
                    this.GetAlumno();//Se actualize el listado
                }else{
                    alert("Al eliminar el alumno falló :(");
                }
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete - this.GetAlumno()');
            },
        });
    }

}
