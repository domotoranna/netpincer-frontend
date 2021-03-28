import { ETELEK } from './etelek.storage';
import { Etel } from './model/etel';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-etelek',
  templateUrl: './etelek.component.html',
  styleUrls: ['./etelek.component.css']
})
export class EtelekComponent implements OnInit {
  service: any;

  constructor() { }

  etelek: Etel[];

  categories: {id: number, nev: string}[] = [];

  ngOnInit(): void {
    //ezt le kell kérni
    this.etelek = ETELEK;

    //ezt le kell kérni backendről, lesz egy getCategories
    this.categories = [
      {id: 0, nev: "előétel"},
      {id: 1, nev: "főétel"},
      {id: 2, nev: "köret"}
    ];
  }

  

  form = new FormGroup({
    
    kategoria: new FormControl('',Validators.required),
    nev: new FormControl('',Validators.required),   
    ar: new FormControl('',Validators.required),
    leiras: new FormControl('',Validators.required), 
    allergen: new FormControl()
  
  });


get nev(){
  return this.form.get('nev');
}
get leiras(){
  return this.form.get('leiras');
}
get ar(){
  return this.form.get('ar');
}
get kategoria(){
  return this.form.get('kategoria');
}
get allergen(){
  return this.form.get('alergen');
}

submit(form: FormGroup){


  let hozzaadas = {
    
    Nev: form.get('nev').value,
    Leiras: form.get('leiras').value,
    Ar: form.get('ar').value,
 
  }
  
  console.log(hozzaadas);

  
  this.service.etelHozzadas(hozzaadas).subscribe( response => {
    console.log(response);
   });
  }



}


