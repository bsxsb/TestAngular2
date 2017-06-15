import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'monitor',
        loadChildren: './monitor/monitor.module#MonitorModule'
    },
    {
        path: 'matrix',
        loadChildren: './matrix/matrix.module#MatrixModule'
    },
    {
        path: '',
        redirectTo: 'matrix',
        pathMatch: 'full'
    },
    // Not found
    { path: '**', redirectTo: 'matrix' }

];
