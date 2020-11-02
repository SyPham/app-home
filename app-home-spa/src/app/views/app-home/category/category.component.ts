import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { Category } from 'src/app/_core/_models/category';
import { AlertifyService } from 'src/app/_core/_services/alertify.service';
import { CategoryService } from 'src/app/_core/_services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: Category;
  data: Array<Category>;
  editSettings = { showDeleteConfirmDialog: false, allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  toolbarOptions = ['ExcelExport', 'Add', 'Edit', 'Delete', 'Cancel', 'Search'];
  @ViewChild('grid') grid: GridComponent;
  pageSettings = { pageCount: 20, pageSizes: true, pageSize: 10 };
  filterSettings = { type: 'Excel' };
  setFocus: any;
  constructor(
    private categoryService: CategoryService,
    private alertify: AlertifyService,
  ) { }

  ngOnInit() {
    this.category = {
      id: 0,
      name: ''
    };
    this.getAllCategory();
  }
  // api
  getAllCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.data = res;
    });
  }
  create() {
    this.categoryService.create(this.category).subscribe(() => {
      this.alertify.success('Add Category Successfully');
      this.getAllCategory();
      this.category.name = '';
    }, () => this.alertify.error('Failed to update the category'));
  }

  update() {
    this.categoryService.update(this.category).subscribe(() => {
      this.alertify.success('Add Category Successfully');
      // this.modalReference.close() ;
      this.getAllCategory();
      this.category.name = '';
    }, () => this.alertify.error('Failed to update the category'));
  }
  delete(id) {
    this.alertify.confirm('Delete Category', 'Are you sure you want to delete this Category "' + id + '" ?', () => {
      this.categoryService.delete(id).subscribe(() => {
        this.getAllCategory();
        this.alertify.success('The category has been deleted');
      }, error => {
        this.alertify.error('Failed to delete the category');
      });
    });
  }
  // end api

  // grid event
  toolbarClick(args): void {
    switch (args.item.text) {
      /* tslint:disable */
      case 'Excel Export':
        this.grid.excelExport();
        break;
      /* tslint:enable */
      default:
        break;
    }
  }
  actionBegin(args) {
    if (args.requestType === 'save' && args.action === 'add') {
      this.category.id = 0;
      this.category.name = args.data.name;
      this.create();
    }
    if (args.requestType === 'save' && args.action === 'edit') {
      this.category.id = args.data.id;
      this.category.name = args.data.name;
      this.update();
    }
    if (args.requestType === 'delete') {
      this.delete(args.data[0].id);
    }
  }
  actionComplete(e): void {
    if (e.requestType === 'beginEdit') {
      if (this.setFocus.field !== 'id') {
        e.form.elements.namedItem(this.setFocus.field).focus(); // Set focus to the Target element
      }
    }
  }
  onDoubleClick(args: any): void {
    this.setFocus = args.column; // Get the column from Double click event
  }
  // end event
  NO(index) {
    return (this.grid.pageSettings.currentPage - 1) * this.pageSettings.pageSize + Number(index) + 1;
  }


}
