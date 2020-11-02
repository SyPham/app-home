import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppHomeRoutingModule} from './app-home-routing.module';

import { RoleComponent } from './role/role.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { BpfcComponent } from './bpfc/bpfc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  imports: [
    CommonModule,
    DropDownListAllModule,
    AppHomeRoutingModule,
    GridAllModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RoleComponent,
    CategoryComponent,
    UserComponent,
    BpfcComponent
  ]
})
export class AppHomeModule { }
