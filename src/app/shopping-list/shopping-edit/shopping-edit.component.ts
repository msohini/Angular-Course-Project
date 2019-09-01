import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppinglistservice : ShoppinglistService) { }

  ngOnInit() {
  }
  onAddItem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    //this.IngredientAdded.emit(newIngredient);
    this.shoppinglistservice.AddIngredient(newIngredient);
  }
}
