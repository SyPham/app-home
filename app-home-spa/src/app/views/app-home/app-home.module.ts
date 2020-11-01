import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppHomeRoutingModule} from './app-home-routing.module';

import { RoleComponent } from './role/role.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { BpfcComponent } from './bpfc/bpfc.component';

@NgModule({
  imports: [
    CommonModule,
    AppHomeRoutingModule,
  ],
  declarations: [
    RoleComponent,
    CategoryComponent,
    UserComponent,
    BpfcComponent
  ]
})
export class AppHomeModule { }
