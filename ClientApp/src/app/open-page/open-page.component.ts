import { Component, OnInit } from '@angular/core';
import { config } from 'process';
//import { HttpClient } from;
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-open-page',
  templateUrl: './open-page.component.html',
  styleUrls: ['./open-page.component.css']
})
export class OpenPageComponent implements OnInit {

  configUrl = '';

  constructor(
    public ConfigService: ConfigService
    ) { }

  ngOnInit() {
    this.getRecipeNames();
  }

  getRecipeNames(){
    return this.ConfigService.getRecipeNames();
  }

  getRecipe(id){

  }

}
