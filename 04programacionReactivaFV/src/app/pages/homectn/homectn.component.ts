import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homectn',
  templateUrl: './homectn.component.html',
  styleUrls: ['./homectn.component.css'],
})
export class HomectnComponent implements OnInit {
  digiArray = [
    'Agumon',
    'Piyomon',
    'Tentomon',
    'Gabumon',
    'Patamon',
    'Gomamon',
    'Palmon',
    'Shellmon',
    'Greymon',
  ];

  constructor() {}

  ngOnInit(): void {}
}
