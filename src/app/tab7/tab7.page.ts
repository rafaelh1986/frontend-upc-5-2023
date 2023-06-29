import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { PagoService } from '../servicios-backend/pago/pago.service';
@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page{
  public listPago = [];
  public idPago = ""
  public fecha = ""
  public monto = ""
  public idAlumno = ""
  public swGuardarCambios = false

  constructor(private pagoService: PagoService) {
    this.GetPagos();//Se carga el listado cada vez que se abra la pag.
  }

  public GetPagos(){
    this.pagoService.GetPagos().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listPago = response.body;
            console.log(this.listPago)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            console.log('complete - this.GetPagos()');
        },
    });
  }

  public addPago(){
      if (this.monto.length > 0 && this.idAlumno.length > 0) {
          var entidad = {
              monto : this.monto,
              idAlumno : this.idAlumno
          }
          console.log(entidad)
          this.pagoService.AddPago(entidad).subscribe({
              next: (response: HttpResponse<any>) => {
                  console.log(response.body)//1
                  if(response.body == 1){
                      alert("Se agrego el Pago con exito :)");
                      this.GetPagos();//Se actualize el listado
                      this.monto = "";
                      this.idAlumno = "";
                  }else{
                      alert("Al agregar el Pago fallo exito :(");
                  }
              },
              error: (error: any) => {
                  console.log(error);
              },
              complete: () => {
                  console.log('complete - this.addPago()');
              },
          });
      }
  }

  public guardarCambios(){
    this.swGuardarCambios = false;
    if (this.monto.length > 0 && this.idAlumno.length > 0) {
        var entidad = {
            id: this.idPago,
            monto : this.monto,
            idAlumno: this.idAlumno
        }
        console.log(entidad)
        this.pagoService.UpdatePago(entidad).subscribe({
            next: (response: HttpResponse<any>) => {
                console.log(response.body)//1
                if(response.body == 1){
                    alert("Se modifico el Pago con exito :)");
                    this.GetPagos();//Se actualize el listado
                    this.idPago = "";
                    this.monto = "";
                    this.idAlumno = "";
                }else{
                    alert("Al modificar el Pago fallo exito :(");
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

  public updatePago(item){
    console.log(item)
    this.idPago = item.id //oculto
    this.monto = item.monto //input
    this.idAlumno = item.idAlumno //input
    this.swGuardarCambios = true;
  }

  public deletePago(item){
        console.log(item.id)
        this.pagoService.DeletePago(item).subscribe({
            next: (response: HttpResponse<any>) => {
                console.log(response.body)//1
                if(response.body == 1){
                    alert("Se elimino el Pago con exito :)");
                    this.GetPagos();//Se actualize el listado
                }else{
                    alert("Al eliminar el Pago fallo exito :(");
                }
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete - this.deletePago()');
            },
        });
  }


}
