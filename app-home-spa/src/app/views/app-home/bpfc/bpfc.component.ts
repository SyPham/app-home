import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditType } from '@syncfusion/ej2-angular-grids';
import { User } from 'src/app/_core/_models/user';
import { Bpfc, BpfcForCreate } from 'src/app/_core/_models/bpfc';
import { AlertifyService } from 'src/app/_core/_services/alertify.service';
import { BpfcService } from 'src/app/_core/_services/bpfc.service';
import { UserService } from 'src/app/_core/_services/user.service';
import { CategoryService } from 'src/app/_core/_services/category.service';
import { Category } from 'src/app/_core/_models/category';

@Component({
  selector: 'app-bpfc',
  templateUrl: './bpfc.component.html',
  styleUrls: ['./bpfc.component.scss']
})
export class BpfcComponent implements OnInit {

  bpfc: BpfcForCreate;
  data: Bpfc[];
  editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  toolbarOptions = ['ExcelExport', 'Add', 'Edit', 'Delete', 'Cancel', 'Search'];
  @ViewChild('grid') grid: GridComponent;
  pageSettings = { pageCount: 20, pageSizes: true, pageSize: 10 };
  filterSettings = { type: 'Excel' };
  setFocus: any;
  bpfcs: Bpfc[];
  fieldsCategory: object = { text: 'name', value: 'name' };
  bpfcID: any;
  userId = +JSON.parse(localStorage.getItem('user')).id;
  users: User[];
  categories: Category[];
  categoryId: any;

  constructor(
    private userService: UserService,
    private categoryService: CategoryService,
    private bpfcService: BpfcService,
    private alertify: AlertifyService,
  ) { }
  ngOnInit() {
    this.bpfc = {
      id: 0,
      name: '',
      description: '',
      userId: this.userId,
      categoryId: 0
    };
    this.getAllBpfc();
    this.getAllCategory();
  }
  // api
  getAllBpfc() {
    this.bpfcService.getAll().subscribe(res => {
      this.data = res;
    });
  }
  getAllUser() {
    this.userService.getAll().subscribe(res => {
      this.users = res;
    });
  }
  getAllCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res;
    });
  }
  create() {
    this.bpfcService.create(this.bpfc).subscribe(() => {
      this.alertify.success('Add Bpfc Successfully');
      this.getAllBpfc();
      this.bpfc = {
        id: 0,
        name: '',
        description: '',
        userId: this.userId,
        categoryId: 0
      };
    }, () => this.alertify.error('Failed to update the bpfc'));
  }

  update() {
    this.bpfcService.update(this.bpfc).subscribe(() => {
      this.alertify.success('Add Bpfc Successfully');
      // this.modalReference.close() ;
      this.getAllBpfc();
      this.bpfc = {
        id: 0,
        name: '',
        description: '',
        userId: this.userId,
        categoryId: 0
      };
    }, () => this.alertify.error('Failed to update the bpfc'));
  }
  delete(id) {
    this.alertify.confirm('Delete Bpfc', 'Are you sure you want to delete this Bpfc "' + id + '" ?', () => {
      this.bpfcService.delete(id).subscribe(() => {
        this.getAllBpfc();
        this.alertify.success('The bpfc has been deleted');
      }, error => {
        this.alertify.error('Failed to delete the bpfc');
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
      this.bpfc.id = 0;
      this.bpfc.name = args.data.name || '';
      this.bpfc.description = args.data.description || '';
      this.bpfc.categoryId = this.categoryId;
      this.create();
    }
    if (args.requestType === 'save' && args.action === 'edit') {
      this.bpfc.id = args.data.id || 0;
      this.bpfc.name = args.data.name || '';
      this.bpfc.description = args.data.description || '';
      this.bpfc.categoryId = this.categoryId;
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
  onChangeCategory(args) {
    this.categoryId = args.itemData.id;
  }
}
