import { Component, OnInit } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: ICategory[] = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category 2'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddCategory() {
    //this.categories.push(
    //  { id: 3, name: `category ${this.categories.length + 1}`}
    //)
    let categories = this.categories.map(category => {
      return { ...category };
    })

    categories.push({
      id: categories.length + 1,
      name: `category ${categories.length + 1}`
    });

    this.categories = categories;

  }

  trackUser(index: number, category: ICategory) {
    return category ? category.id : undefined;
  }

}
