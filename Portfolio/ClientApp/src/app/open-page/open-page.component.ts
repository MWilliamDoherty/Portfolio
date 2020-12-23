import { Component, OnInit } from '@angular/core';
import { RecipeService, Recipe, Step } from '../recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

let header = new HttpHeaders();
header.set('Access-Control-Allow-Origin', '*');

@Component({
  selector: 'app-open-page',
  templateUrl: './open-page.component.html',
  styleUrls: ['./open-page.component.css'],
  //providers: [ RecipeService ]
})
export class OpenPageComponent implements OnInit {

  configUrl = 'api/Controllers/RecipeController';
  
  show:boolean;
  recipes:Recipe[];
  recipe:Recipe;
  selectedRecipe

  constructor(
    //public service: RecipeService,
    public http: HttpClient
    ) { }

  ngOnInit() {
    this.show = true;
    this.recipes = new Array<Recipe>();
    this.recipe = new Recipe;
    this.recipe.Steps = new Array<Step>();
    this.getRecipeNames();
  }

  getRecipeNames(){
    this.http.get<Array<Recipe>>(this.configUrl).subscribe(data => {
      this.recipes = this.recipes.concat(data);
    });
  }

  checkValue(){
    this.show = true;
  }

  getRecipe(id){
    

  }

}
