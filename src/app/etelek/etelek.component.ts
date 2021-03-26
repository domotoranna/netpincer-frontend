import { ETELEK } from './etelek.storage';
import { Etel } from './model/etel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etelek',
  templateUrl: './etelek.component.html',
  styleUrls: ['./etelek.component.css']
})
export class EtelekComponent implements OnInit {

  constructor() { }

  etelek: Etel[];

  ngOnInit(): void {
    this.etelek = ETELEK;
  }

}
