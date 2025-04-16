import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'create',
        component: CreateEmpComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: 'update-emp/:id',
        component: UpdateEmpComponent
    }
];
