import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/myproductservice/productservice.service';
import { MyProduct } from 'src/app/product';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent implements OnInit {
  products!:MyProduct[];

  constructor(private productService: ProductserviceService) { }

  ngOnInit(): void {
/*     this.productService.getProducts().subscribe((res:any[]) => {
        this.products=res;
        console.log(this.products);
    },
    err=> console.log(err)); */
    this.products=this.productService.getProducts();
  }
  creaProducto(){
    let datos: any={
      nombre: 'Producto' + Math.round(Math.random()*(100-1)+1),
      codigo: this.productService.generaCodigo(),
      stock: Math.round(Math.random()*(200-20)+20),
      tipo:'Prueba',
      image:''
    };
    this.guardarProducto(datos);
  }
  guardarProducto(producto:MyProduct){
    
  }
  eliminaProducto(id:number){
    this.productService.borraProducto(id).subscribe(()=> {
      return this.productService.getProducts();
    })
  }

  actualizaProducto(id:number, producto:MyProduct){
    let datos:any={
      nombre: 'Producto 2 ' + Math.round(Math.random()*(100-1)+1),
      codigo: this.productService.generaCodigo(),
      stock: Math.round(Math.random()*(200-20)+20),
      tipo:'Prueba 2',
      image:''
    };
    this.productService.actualizaProducto(id,datos).subscribe(()=> {
      return this.productService.getProducts();
    })
  }

}
