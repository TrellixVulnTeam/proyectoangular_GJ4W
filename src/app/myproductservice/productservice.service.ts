import { Injectable } from '@angular/core';
import { MyProduct } from '../product';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  
  getProducts(): /* Observable<MyProduct[]> */ MyProduct[]{
    /* return this.http.get<MyProduct[]>('http://localhost:3000/elcato').pipe(map((res:any)=> res.data)); */
    return[
      {
        "id_producto": 1,
        "nombre": "Notebook gamer Asus ROG Zephyrus ",
        "codigo": "AGT-0001",
        "stock": 80,
        "price": 1021.95,
        "tipo": "Tecnología",
        "imageUrl": "https://www.spdigital.cl/img/products/perilfinetasdsus.png"
      },
      {
        "id_producto": 2,
        "nombre": "Notebook Alienware Zs90",
        "codigo": "FAA-0042",
        "stock": 92,
        "price": 1200.95,
        "tipo": "Tecnología",
        "imageUrl": "https://www.spdigital.cl/img/products/OriginalPng.png"
      },
      {
        "id_producto": 3,
        "nombre": "Notebook MSI",
        "codigo": "ZGF-0707",
        "stock": 5,
        "price": 1452.00,
        "tipo": "Tecnología",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEA26NBIh1wNhnQF_tySPhzMDt6nEicS8sFQ&usqp=CAU"
      },
      {
        "id_producto": 4,
        "nombre": "Computador Macbook Air",
        "codigo": "TYA-1101",
        "stock": 71,
        "price": 1890.95,
        "tipo": "Tecnología",
        "imageUrl": "https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_960_720.jpg"
      },
      {
        "id_producto": 5,
        "nombre": "Laptop Asus Zenbook 14 Q407iq-br5n4",
        "codigo": "HHT-0173",
        "stock": 19,
        "price": 1222.00,
        "tipo": "Tecnología",
        "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_812542-MPE43962195823_102020-O.jpg"
      },
      {
        "id_producto": 6,
        "nombre": "Celular IPhone SE 2015",
        "codigo": "TEJ-0202",
        "stock": 41,
        "price": 790.00,
        "tipo": "Tecnología",
        "imageUrl": "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg"
      },
      {
        "id_producto": 7,
        "nombre": "Smart TV Curvo LED Andoid 4K",
        "codigo": "AAA-0033",
        "stock": 10,
        "price": 757.85,
        "tipo": "Tecnología",
        "imageUrl": "https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876_960_720.jpg"
      },
      {
        "id_producto": 8,
        "nombre": "Extractor de ventilación para notebook USB",
        "codigo": "GWA-0103",
        "stock": 12,
        "price": 52.00,
        "tipo": "Accesorios",
        "imageUrl": "https://www.factorytech.cl/image/cache/catalog/FCT%202015/7950/VENTILADOR%20EXTRACTOR%20NOTEBOOK-GAMER-USB-EXTERNO-LED-RGB-700-4000RPM-1-500x620.jpg"
      },
      {
        "id_producto": 9,
        "nombre": "Ventilador de base Reptilex RX0025 LED",
        "codigo": "ZGF-0707",
        "stock": 5,
        "price": 169.00,
        "tipo": "Accesorios",
        "imageUrl": "https://www.libreriaservicom.cl/wp-content/uploads/2020/12/ventilador-gamer-pro-para-notebook-rx0025-reptilex-f1.jpg"
      },
      {
        "id_producto": 10,
        "nombre": "Ventilador de base Reptilex Pro 4",
        "codigo": "FFT-0073",
        "stock": 19,
        "price": 89.00,
        "tipo": "Accesorios",
        "imageUrl": "https://soulmobile.cl/wp-content/uploads/2021/05/cooler_reptilex.jpg"
      },
      {
        "id_producto": 11,
        "nombre": "Licencia Office 365 1 equipo",
        "codigo": "FGT-2076",
        "stock": 6,
        "price": 590.00,
        "tipo": "Software",
        "imageUrl": "http://spanish.license-keycode.com/photo/pl23860749-microsoft_office_365_pro_plus_licence_key_for_windows_mac_ios_android_os_software_5_users.jpg"
      }
    ]
  }
  codigoRandom(chars:string, lon:number){
    let code="";
    for (let x = 0; x < lon; x++) {
      let random = Math.floor(Math.random()*chars.length);
      code+=chars.substr(random,1);
    }
    return code;
  }

  generaCodigo():string{
    return this.codigoRandom('ABCDEFGHIJKLMNOPQRSTUVWXYZ',3)+'-'+ this.codigoRandom('0123456789',4);
  }

  saveProduct(product:MyProduct){
    return this.http.post<MyProduct[]>('http://localhost:3000/elcato', product);
  }

  borraProducto(id:number){
    return this.http.delete('http://localhost:3000/producto/'+id);
  }

  actualizaProducto(id:number, product:MyProduct){
    return this.http.put('http://localhost:3000/producto/'+id, product);
  }
}
