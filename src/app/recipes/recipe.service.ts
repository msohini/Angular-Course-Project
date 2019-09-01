import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';
import { ShoppinglistService } from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('Butter Chicken',
      'Exquisite Dish',
      'https://www.seriouseats.com/2019/07/20190619-korean-bbq-vicky-wasik-29.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Butter', 1)]
    ),
    new Recipe('Fried Rice',
      'Aroma Rice',
      'https://www.seriouseats.com/2019/07/20190619-korean-bbq-vicky-wasik-29.jpg',
      [new Ingredient('Rice', 1), new Ingredient('oil', 1)]
    )
  ];
  constructor(private slservice: ShoppinglistService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index : number) {
    return this.recipes[index];
  }
  recipeSelected = new EventEmitter<Recipe>();
  addIngredientstoShoppingList(ingredients:Ingredient[]) {
    this.slservice.addIngredients(ingredients);
  }
}
