import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Array<Recipe> = [
    new Recipe('Sinigang', 'This is a delicious food. Best in rainiy season.', 'https://www.foxyfolksy.com/wp-content/uploads/2019/07/sinigang-na-baboy.jpg'),
    new Recipe('Adobo', 'This is a delicious food. Best pag gutom ka.', 'https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo--500x471.jpg'),
    new Recipe('Nilaga', 'This is a delicious food. Best pag may patis .', 'http://images.summitmedia-digital.com/yummyph/images/2019/10/11/beefymushroomnilagarecipe2.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }


  onRecipeSelected(recipeElement: Recipe) {
    this.recipeWasSelected.emit(recipeElement);
  }

}
