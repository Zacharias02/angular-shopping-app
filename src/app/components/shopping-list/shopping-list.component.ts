import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = [
    new Ingredient('Sibuyas', 5),
    new Ingredient('Kamatis', 10),
    new Ingredient('Bawang', 15),
    new Ingredient('Paminta', 20),
    new Ingredient('Baboy', 25),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
