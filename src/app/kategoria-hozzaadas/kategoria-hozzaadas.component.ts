import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kategoria-hozzaadas',
  templateUrl: './kategoria-hozzaadas.component.html',
  styleUrls: ['./kategoria-hozzaadas.component.css']
})
export class KategoriaHozzaadasComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    kategoria: new FormControl()
  })

  submit(form){
    
  }

  ngOnInit(): void {
  }

}
