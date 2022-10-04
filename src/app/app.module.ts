import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { UserComponent } from './user/user.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UsersDataComponent } from './users-data/users-data.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    UserComponent,
    CreateCategoryComponent,
    UsersDataComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
