
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';


export class ShoppinglistService {
  private ingredients: Ingredient[] = [new Ingredient('Apples', 10),
  new Ingredient('Tomatoes', 10)
  ];
  ingredientsChanged = new EventEmitter <Ingredient[]>();
  getIngredient() {
    return this.ingredients.slice();
  }
  AddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
}
