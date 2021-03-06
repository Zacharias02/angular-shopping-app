import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }


  onAddPressed(): void {
    const ingName = this.nameInputRef.nativeElement.value;
    const amountName = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingName, amountName);
    this.ingredientAdded.emit(newIngredient);
  }

}
