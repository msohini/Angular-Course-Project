import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const approutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch:'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class appRoutingModule {

}
