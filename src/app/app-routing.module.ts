import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./features/landing-page/landing-page.module').then(m => m.LandingPageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
