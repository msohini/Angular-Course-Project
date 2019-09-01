import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  //providers: [ShoppinglistService]
})
export class ShoppingListComponent implements OnInit {
  //ingredients: Ingredient[] = [new Ingredient('Apples', 10),
  //  new Ingredient('Tomatoes', 10)
  //];
  ingredients: Ingredient[] = [];
  constructor(private shoppinglistservice:ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistservice.getIngredient();
    this.shoppinglistservice.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );
  }
  //onIngredientAdded(ingredient: Ingredient) {
  //  this.ingredients.push(ingredient);
  //  //this.shoppinglistservice.AddIngredient(ingredient);
  //}
}
