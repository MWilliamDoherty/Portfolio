import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe, Step, RecipeService } from '../recipe.service'

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  constructor(public http: HttpClient) { }

  public recipe:Recipe;
  public stepNumber:number = 1;
  configUrl = 'https://lp:44335/api/RecipeController';

  ngOnInit() {
    this.recipe = new Recipe();
    this.recipe.Steps = new Array<Step>();

  }

  onKeyName(name: string) {
    this.recipe.Name = name;
  }

  addStep(step:string) {
    let newStep = new Step();
    newStep.Notes = step;
    newStep.NumberInList = this.stepNumber;
    this.stepNumber++;
    this.recipe.Steps.push(newStep);
    
  }

  saveRecipe() {
    this.http.post<Recipe>(this.configUrl, this.recipe);
  }

}
