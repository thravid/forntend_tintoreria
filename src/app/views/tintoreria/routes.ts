import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
    data: {
      title: 'Base'
    },
    children: [
        {
          path: '',
          redirectTo: 'cards',
          pathMatch: 'full'
        },
        {
          path: 'cliente',
          loadComponent: () => import('./cliente/ClienteComponent').then(m => m.ClienteComponent),
          data: {
            title: 'Cliente'
          }
        },
        {
            path: 'recibo',
            loadComponent: () => import('./recibo/recibo.component').then(m => m.ReciboComponent),
            data: {
              title: 'Accordion'
            }
          },
          {
            path: 'entrega',
            loadComponent: () => import('./entrega/entrega.component').then(m => m.EntregaComponent),
            data: {
              title: 'Accordion'
            }
          },
          {
            path: 'reportes',
            loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
            data: {
              title: 'Accordion'
            }
          }
    ]
    }
];