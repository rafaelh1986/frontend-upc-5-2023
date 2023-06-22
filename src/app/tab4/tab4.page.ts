import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios-backend/productos/productos.service';
import { HttpResponse } from '@angular/common/http';

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

  constructor(private productosService: ProductosService) {
    this.GetHProducto();//Se carga el listado cada vez que se abra la pag.
  }

  public GetHProducto(){
    this.productosService.GetProductos().subscribe({
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

}
