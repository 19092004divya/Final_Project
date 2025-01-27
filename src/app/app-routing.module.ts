import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductUpsertComponent } from './products/product-upsert/product-upsert.component';
import { ProductComponent } from './products/product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const appRoutes:Routes=[{
  path:'',
  component:HomeComponent
},
{
  path:'user-auth',
  component:UserAuthComponent
},
{
  path:'product-upsert',
  component:ProductUpsertComponent
},
{
  path:'product-upsert/:id',
  component:ProductUpsertComponent
},
{
  path:'product-details/:id',
  component:ProductComponent
},
{
  path:'not-found',
  component:NotfoundComponent,
},{
  path:'**',
  redirectTo:'not-found',
}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
