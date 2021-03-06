import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //recipes: Recipe[] = [new Recipe('A Test Recipe', 'This is simply a test', 'https://www.seriouseats.com/2019/07/20190619-korean-bbq-vicky-wasik-29.jpg'),
  //  new Recipe('A Test Recipe', 'Another Recipe', 'https://www.seriouseats.com/2019/07/20190619-korean-bbq-vicky-wasik-29.jpg')
  //  ];
  recipes: Recipe[] = [];
  constructor(private RecipeService: RecipeService) { }
  @Output() RecipeWasSelected = new EventEmitter<Recipe>();
  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes();
   
  }
  //onRecipeSelected(recipe: Recipe) {
  //  this.RecipeWasSelected.emit(recipe);
  //}



}
