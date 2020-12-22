import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class Recipe {
  Id: number;
  Name: string;
  Steps: Step[];
}

export class Step {
  Id: number;
  NumberInList: number;
  ActionId: number;
  RecipeId: number;
  Notes: string;
  Action: Action;
  Measurements: Measurement[];
}

export class Measurement {
  Id: number;
  IngredientId: number;
  MeasurementTypeId: number;
  Quantity: number;
  Ingredient: Ingredient;
}

export class Ingredient {
  Id: number;
  Name: string;
}

export class Action {
  Id: number;
  Name: string;
}

export class RecipeService {

  
  endpoint = 'http://localhost:44335';
  constructor(private http: HttpClient) { }

  getRecipeNames() {
    return this.http.get<Recipe>(this.endpoint);
  }


}
