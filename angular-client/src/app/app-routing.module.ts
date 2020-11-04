import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/link1',
    pathMatch: 'full'
  },
  {
    path: 'link1',
    loadChildren: () => import('./modules/test1/test1.module').then(m => m.Test1Module)
  },
  {
    path: 'link2',
    loadChildren: () => import('./modules/test1/test1.module').then(m => m.Test1Module)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
