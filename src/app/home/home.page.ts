import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public city: string = 'Luanda';
  public country: string = 'Angola';
  public temperature: number = 25;

  constructor() {}


  ngOnInit() {

  }


}
