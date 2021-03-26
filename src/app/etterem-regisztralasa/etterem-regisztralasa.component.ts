import { RegisztracioService } from './../services/regisztracio.service';
import { Nyitvatartas } from './model/nyitvatartas';
import { Nap } from './model/nap';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-etterem-regisztralasa',
  templateUrl: './etterem-regisztralasa.component.html',
  styleUrls: ['./etterem-regisztralasa.component.css']
})
export class EtteremRegisztralasaComponent implements OnInit {

  constructor(private service: RegisztracioService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    
      email: new FormControl(),
      jelszo: new FormControl(),
      nev: new FormControl(),
      leiras: new FormControl(),
    
    cim: new FormGroup({
      irsz: new FormControl(),
      kozterulet: new FormControl(),
      hazszam: new FormControl(),
      emeletajto: new FormControl(),
    }),
    nyitvatartas: new FormGroup({
      hetfoEttNyit: new FormControl(),
      hetfoEttZar: new FormControl(),
      hetfoKonyhaNyit: new FormControl(),
      hetfoKonyhaZar: new FormControl(),

      keddEttNyit: new FormControl(),
      keddEttZar: new FormControl(),
      keddKonyhaNyit: new FormControl(),
      keddKonyhaZar: new FormControl(),

      szerdaEttNyit: new FormControl(),
      szerdaEttZar: new FormControl(),
      szerdaKonyhaNyit: new FormControl(),
      szerdaKonyhaZar: new FormControl(),

      csutEttNyit: new FormControl(),
      csutEttZar: new FormControl(),
      csutKonyhaNyit: new FormControl(),
      csutKonyhaZar: new FormControl(),

      pentEttNyit: new FormControl(),
      pentEttZar: new FormControl(),
      pentKonyhaNyit: new FormControl(),
      pentKonyhaZar: new FormControl(),

      szoEttNyit: new FormControl(),
      szoEttZar: new FormControl(),
      szoKonyhaNyit: new FormControl(),
      szoKonyhaZar: new FormControl(),

      vasEttNyit: new FormControl(),
      vasEttZar: new FormControl(),
      vasKonyhaNyit: new FormControl(),
      vasKonyhaZar: new FormControl(),

     
    }),

      cimke: new FormControl(),
      irszamok: new FormArray([]),
      szallktg: new FormControl() 
    

  });

  napok: string[] = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök','Péntek','Szombat','Vasárnap'];

  orak: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

  nyitvatartas: Nyitvatartas = null;


  get irszamok() {
    return this.form.get('irszamok') as FormArray;
  }

  irszamHozzaad(irszam: HTMLInputElement){
    console.log(this.irszamok);
    (this.irszamok as FormArray).push(new FormControl(irszam.value));
    irszam.value = '';
  }

  irszamEltavolit(irsz: AbstractControl){
    let index = this.irszamok.controls.indexOf(irsz);
    this.irszamok.removeAt(index);
  }

  submit(form: FormGroup){


    let regisztracio = {
      Email: form.get('email').value,
      Jelszo: form.get('jelszo').value,
      Nev: form.get('nev').value,
      Leiras: form.get('leiras').value,
      Cim:
      {
        Irsz: form.get('cim').get('irsz').value,
        Kozterulet: form.get('cim').get('kozterulet').value,
        Hazszam: form.get('cim').get('hazszam').value,
        Emelet_ajto: form.get('cim').get('emeletajto').value
      },
      Nyitvatartas: this.nyitvatartas,
      
      Cimke:  form.get('cimke').value,
      //"Kep": null,
      Szallit: form.get('irszamok').value,
      Szallitasi_ktsg: form.get('szallktg').value
    }
    
    console.log(regisztracio);


    let reg = {
      Email: "finssdsdasom@csontok.hu",
      "Jelszo": "teszt_jelszo",
      "Nev": "Csontok",
      "Leiras": "Innen csak csontokat lehet rendelni.",
      "Cim":
      {
        "Irsz": 8200,
        "Kozterulet": "Gyanús utca",
        "Hazszam": "3.",
        "Emelet_ajto": "1. em. 5. a."
      },
      "Nyitvatartas":
      [
        {
          "NapID": 0,
          "KonyhaNyit": 8,
          "EtteremNyit": 9,
          "EtteremZar": 20,
          "KonyhaZar": 21
        },
        {
          "NapID": 1,
          "KonyhaNyit": 8,
          "EtteremNyit": 9,
          "EtteremZar": 20,
          "KonyhaZar": 21
        },
        null,
        null,
        null,
        null,
        null
      ],
      "Cimke": null,
      "Kep": null,
      "Szallit": [8200, 8412, 8411, 8248, 8475],
      "Szallitasi_ktsg": 800
    }

    this.service.etteremRegisztral(reg).subscribe( response => {
      console.log(response);
     });
  }

}
