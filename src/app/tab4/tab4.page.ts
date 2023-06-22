import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HproductoService } from '../servicios-backend/hproducto/hproducto.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  public listHProducto = [];
  public idHProducto = ""
  public cantidad = ""
  public idProducto = ""
  public idCarritoCompra = ""
  public swGuardarCambios = false

  constructor(private hproductoService: HproductoService) {
    this.GetHProducto();//Se carga el listado cada vez que se abra la pag.
  }

  public GetHProducto(){
    this.hproductoService.GetHProducto().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listHProducto = response.body;
            //console.log(this.listProducto)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            console.log('complete - this.GetHProducto()');
        },
    });
  }  
  public addHProducto(){
    if (this.cantidad.length > 0 && this.idHProducto.length > 0) {
        var entidad = {
            cantidad : this.cantidad,
            idHProducto : this.idHProducto
        }
        console.log(entidad)
        this.hproductoService.AddHProducto(entidad).subscribe({
            next: (response: HttpResponse<any>) => {
                console.log(response.body)//1
                if(response.body == 1){
                    alert("Se agrego el HProducto con exito :)");
                    this.GetHProducto();//Se actualize el listado
                    this.cantidad = "";
                    this.idHProducto = "";
                }else{
                    alert("Al agregar el HProducto fallo exito :(");
                }
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete - this.addHProducto()');
            },
        });
    }
}

}
