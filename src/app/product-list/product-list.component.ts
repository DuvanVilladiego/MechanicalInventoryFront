// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // Aquí puedes realizar inicializaciones, como cargar datos de productos desde el servicio
  }


}
