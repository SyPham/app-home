import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { BpfcComponent } from './bpfc/bpfc.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
      breadcrumb: ''
    },
    children: [
      {
        path: 'role',
        component: RoleComponent,
        data: {
          title: 'role',
          breadcrumb: 'role'
        }
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'category',
          breadcrumb: 'category'
        }
      }, {
        path: 'bpfc',
        component: BpfcComponent,
        data: {
          title: 'bpfc',
          breadcrumb: 'bpfc'
        }
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: 'user',
          breadcrumb: 'user'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppHomeRoutingModule { }

