import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { CarritoCompraService } from '../servicios-backend/carrito-compra/carrito-compra.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page { 
    public listCarritoCompra = [];
    public idUsuarios = ""
    public swGuardarCambios = false
  
    constructor(private carritocompraService: CarritoCompraService) {
      this.GetCarritoCompra();//Se carga el listado cada vez que se abra la pag.
    }
  
    public GetCarritoCompra(){
      this.carritocompraService.GetCarritoCompra().subscribe({
          next: (response: HttpResponse<any>) => {
              this.listCarritoCompra = response.body;
              console.log(this.listCarritoCompra)
          },
          error: (error: any) => {
              console.log(error);
          },
          complete: () => {
              console.log('complete - this.listCarritoCompra()');
          },
      });
    }  
    public addCarritoCompra(){
      if (this.idUsuarios.length > 0) {
          var entidad = {
              idUsuarios : this.idUsuarios
          }
          console.log(entidad)
          this.carritocompraService.AddCarritoCompra(entidad).subscribe({
              next: (response: HttpResponse<any>) => {
                  console.log(response.body)//1
                  if(response.body == 1){
                      alert("Se agrego el Carrito de Compra con exito :)");
                      this.GetCarritoCompra();//Se actualize el listado
                        this.idUsuarios = "";
  
                  }else{
                      alert("Al agregar el CarritoCompra fallo exito :(");
                  }
              },
              error: (error: any) => {
                  console.log(error);
              },
              complete: () => {
                  console.log('complete - this.addCarritoCompra()');
              },
          });
      }
  }
}
