import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  private recipes: Recipe[] = [
    {
      id: '1',
      title: '',
      imageUrl: '',
      ingredients: ['', '', '']
    },
    {
      id: '2',
      title: '',
      imageUrl: '',
      ingredients: ['', '', '']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
