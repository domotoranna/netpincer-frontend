import { Kategoria } from './model/kategoria';
import { ActivatedRoute } from '@angular/router';
import { EtelService } from './../services/etel.service';
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

  constructor(private etelService: EtelService, private activatedRoute: ActivatedRoute) {
    //ez azért van a konstruktorban, mert az onInut-ben már van egy subscribe és elvileg nem lehet kettő,
    //van erre valami jobb megoldás de egyenlőre ez így működik szóval hagyom
    this.kategoriakLekerese();
  }

  etteremId: number;
  etelek: Etel[];

  categories: Kategoria[] = [];

  allergenek_tomb: Kategoria[] = [{
    CimkeID: 6,
    Nev: "Glutén",
    Tipus: "Allergén"
  }, {
    CimkeID: 7,
    Nev: "Laktóz",
    Tipus: "Allergén"
  }];

  form = new FormGroup({

    kategoria: new FormControl('', Validators.required),
    nev: new FormControl('', Validators.required),
    ar: new FormControl('', Validators.required),
    leiras: new FormControl('', Validators.required),
    allergenek: new FormControl(),
    akcio: new FormControl(),
    ettol: new FormControl(),
    eddig: new FormControl()

  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.etteremId = +params.get('id');

      }
    );
    this.etelekLekerese();    
  }

  etelekLekerese() {
    this.etelService.getEtelek(this.etteremId).subscribe(response => {
      //itt kell a tömbnek értékül adni ami visszajön a kérésből
      this.etelek = response.Etelek;
    })
  }

  kategoriakLekerese() {
    this.etelService.getKategoriak().subscribe(
      response => {
        response.EtelCimke.forEach(element => {
          
          if(element.Tipus=="Kategória"){
            this.categories.push(element);
          }
          else if(element.Tipus=="Allergén"){
            this.allergenek_tomb.push(element);
          }
        });
       console.log(this.allergenek_tomb); 
      }
    )
  }




  get nev() {
    return this.form.get('nev');
  }
  get leiras() {
    return this.form.get('leiras');
  }
  get ar() {
    return this.form.get('ar');
  }
  get kategoria() {
    return this.form.get('kategoria');
  }
  get allergen() {
    return this.form.get('alergen');
  }

  submit(form: FormGroup) {
    console.log(form.get('kategoria').value);
    console.log(form.get('allergenek').value);

    let hozzaadas = {

      Nev: form.get('nev').value,
      Ar: form.get('ar').value,
      Kep: 'not yet',
      Leiras: form.get('leiras').value,
      EtteremID: this.etteremId,
      Idoszak: {
        Kezdes: form.get('ettol').value,
        Befejezes: form.get('eddig').value
      },
      AkcioID: null,
      Cimke: [+form.get('kategoria').value]
    }
    if(form.get('allergenek').value != null){
      hozzaadas.Cimke.push(form.get('allergenek').value);
    }

    console.log(hozzaadas);


    this.etelService.etelHozzadas(hozzaadas).subscribe(response => {
      console.log(response);
      this.etelekLekerese();
    });


  }

}
