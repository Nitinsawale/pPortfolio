import { Routes } from '@angular/router';

export const routes: Routes = [
   
    {
        "path":"login",
        loadComponent:()=> import("./components/login/login.component").then(m => m.LoginComponent)
    },
    {
        "path":"",
        loadComponent:()=> import("./components/layout/layout.component").then(m => m.LayoutComponent),
        children:[
            {
                "path":"",
                "redirectTo":"dashboard",
                pathMatch:"full"
            },
            {
                path:"dashboard",
                loadComponent: () => import("./components/dashboard/dashboard.component").then(m => m.DashboardComponent)
            },
            {
                path:"holdings",
                loadComponent: () => import("./components/holdings/holdings.component").then(m => m.HoldingsComponent)
            }
        ]
       
    },
];
