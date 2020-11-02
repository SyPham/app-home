import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { Role } from 'src/app/_core/_models/role';
import { AlertifyService } from 'src/app/_core/_services/alertify.service';
import { RoleService } from 'src/app/_core/_services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  role: Role;
  data: Array<Role>;
  editSettings = { showDeleteConfirmDialog: false, allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  toolbarOptions = ['ExcelExport', 'Add', 'Edit', 'Delete', 'Cancel', 'Search'];
  @ViewChild('grid') grid: GridComponent;
  pageSettings = { pageCount: 20, pageSizes: true, pageSize: 10 };
  filterSettings = { type: 'Excel' };
  setFocus: any;
  constructor(
    private roleService: RoleService,
    private alertify: AlertifyService,
  ) { }

  ngOnInit() {
    this.role = {
      id: 0,
      name: ''
    };
    this.getAllRole();
  }
  // api
  getAllRole() {
    this.roleService.getAll().subscribe(res => {
      this.data = res;
    });
  }
  create() {
    this.roleService.create(this.role).subscribe(() => {
      this.alertify.success('Add Role Successfully');
      this.getAllRole();
      this.role.name = '';
    }, () => this.alertify.error('Failed to update the role'));
  }

  update() {
    this.roleService.update(this.role).subscribe(() => {
      this.alertify.success('Add Role Successfully');
      // this.modalReference.close() ;
      this.getAllRole();
      this.role.name = '';
    }, () => this.alertify.error('Failed to update the role'));
  }
  delete(id) {
    this.alertify.confirm('Delete Role', 'Are you sure you want to delete this Role "' + id + '" ?', () => {
      this.roleService.delete(id).subscribe(() => {
        this.getAllRole();
        this.alertify.success('The role has been deleted');
      }, error => {
        this.alertify.error('Failed to delete the role');
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
        this.role.id = 0;
        this.role.name = args.data.name;
        this.create();
    }
    if (args.requestType === 'save' && args.action === 'edit') {
        this.role.id = args.data.id;
        this.role.name = args.data.name;
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
