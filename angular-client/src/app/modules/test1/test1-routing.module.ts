import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { Test1Component } from './test1.component'

const routes: Routes = [
  {
    path: '',
    component: Test1Component,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Test1RoutingModule {}
