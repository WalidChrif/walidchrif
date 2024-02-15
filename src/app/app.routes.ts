import { Routes } from '@angular/router';
import { RedirectGuard } from './guards/redirect.guard';

export const routes: Routes = [{
    path: 'github',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: '//www.github.com/WalidChrif'
    }}
,{
    path: 'linkedin',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: '//www.linkedin.com/in/walid-chrif'
    }}
,{
    path: 'facebook',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: '//www.facebook.com/profile.php?id=100090756348995'
    }}
,{
    path: 'FunTravels',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: '//www.github.com/WalidChrif/funtravels'
    }}
,{
    path: 'ShopShop',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: '//www.github.com/WalidChrif/shopshop'
    }}
,{
    path: 'My Portfolio',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: '//www.github.com/WalidChrif/myportfolio'
    }}
  ];
