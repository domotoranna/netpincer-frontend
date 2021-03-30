import { EttermekListazasaService } from './../services/ettermek-listazasa.service';
import { Component, OnInit } from '@angular/core';
import { Etterem } from './model/etterem';

@Component({
  selector: 'app-ettermek',
  templateUrl: './ettermek.component.html',
  styleUrls: ['./ettermek.component.css']
})
export class EttermekComponent implements OnInit {

  constructor(private service: EttermekListazasaService) { }

  ettermek = [
    {
      Leiras: "Innen csak csontokat lehet rendelni.",
      Nev: "Csontok",
      Szallitasi_ktsg: 80
    }

  ]

  ngOnInit(): void {
    let parameterek = {
      Irsz: 8200,
      Nev: null,
      EtelCimke: [
      ],
      EtteremCimke: [
      ]

    }
    this.service.ettermekListazasa(parameterek).subscribe(response => {
      console.log(response);
      //this.ettermek = response.Ettermek;
    })
  }



}
