import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { FormComponent } from './pages/form/form.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PrerenderRoute } from './PrerenderRoute';
export const routes: PrerenderRoute[] = [
    {path:'',component:HomeComponent},
    {path:'item',component:ItemComponent},
    {path:'form',component:FormComponent},
    {
        path: 'product/:id',
        component: ProductDetailComponent,
        // so that Vercel won't freak out
        getPrerenderParams: () => {
          return [
            { id: '1' },
            { id: '2' },
            { id: '3' }
          ];
        }
      }
      
];
