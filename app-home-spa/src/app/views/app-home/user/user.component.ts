import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditType } from '@syncfusion/ej2-angular-grids';
import { Role } from 'src/app/_core/_models/role';
import { User, UserForCreate } from 'src/app/_core/_models/user';
import { AlertifyService } from 'src/app/_core/_services/alertify.service';
import { RoleService } from 'src/app/_core/_services/role.service';
import { UserService } from 'src/app/_core/_services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: UserForCreate;
  data: User[];
  editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal'  };
  toolbarOptions = ['ExcelExport', 'Add', 'Edit', 'Delete', 'Cancel', 'Search'];
  @ViewChild('grid') grid: GridComponent;
  pageSettings = { pageCount: 20, pageSizes: true, pageSize: 10 };
  filterSettings = { type: 'Excel' };
  setFocus: any;
  roles: Role[];
  fieldsRole: object = { text: 'name', value: 'name' };
  roleID: any;

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private alertify: AlertifyService,
  ) { }
  ngOnInit() {
    this.user = {
      id: 0,
      username: '',
      password: '',
      roleId: 0
    };
    this.getAllUser();
    this.getAllRole();
  }
  // api
  getAllUser() {
    this.userService.getAll().subscribe(res => {
      this.data = res;
    });
  }
  getAllRole() {
    this.roleService.getAll().subscribe(res => {
      this.roles = res;
    });
  }
  create() {
    this.userService.create(this.user).subscribe(() => {
      this.alertify.success('Add User Successfully');
      this.getAllUser();
      this.user = {
        id: 0,
        username: '',
        password: '',
        roleId: 0
      };
    }, () => this.alertify.error('Failed to update the user'));
  }

  update() {
    this.userService.update(this.user).subscribe(() => {
      this.alertify.success('Add User Successfully');
      // this.modalReference.close() ;
      this.getAllUser();
      this.user = {
        id: 0,
        username: '',
        password: '',
        roleId: 0
      };
    }, () => this.alertify.error('Failed to update the user'));
  }
  delete(id) {
    this.alertify.confirm('Delete User', 'Are you sure you want to delete this User "' + id + '" ?', () => {
      this.userService.delete(id).subscribe(() => {
        this.getAllUser();
        this.alertify.success('The user has been deleted');
      }, error => {
        this.alertify.error('Failed to delete the user');
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
      this.user.id = 0;
      this.user.username = args.data.username;
      this.user.password = args.data.password || 'shc@1234';
      this.user.roleId = args.data.roleId;
      this.create();
    }
    if (args.requestType === 'save' && args.action === 'edit') {
      this.user.id = args.data.id;
      this.user.username = args.data.username;
      this.user.password = args.data.password || '';
      this.user.roleId = args.data.roleId;
      this.update();
    }
    if (args.requestType === 'delete') {
      this.delete(args.data[0].id);
    }
  }
  actionComplete(e): void {
    if (e.requestType === 'beginEdit') {
      if (this.setFocus.field !== 'id' && this.setFocus.field !== 'role.name') {
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
  onChangeRole(args) {
    this.roleID = args.itemData.id;
  }
}
