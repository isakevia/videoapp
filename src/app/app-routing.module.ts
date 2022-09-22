import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'como-treinar-seu-dragao',
    loadChildren: () => import('./como-treinar-seu-dragao/como-treinar-seu-dragao.module').then( m => m.ComoTreinarSeuDragaoPageModule)
  },  {
    path: 'encanto',
    loadChildren: () => import('./encanto/encanto.module').then( m => m.EncantoPageModule)
  },
  {
    path: 'arremessando-alto',
    loadChildren: () => import('./arremessando-alto/arremessando-alto.module').then( m => m.ArremessandoAltoPageModule)
  },
  {
    path: 'coach-carter-treino-para-a-vida',
    loadChildren: () => import('./coach-carter-treino-para-a-vida/coach-carter-treino-para-a-vida.module').then( m => m.CoachCarterTreinoParaAVidaPageModule)
  },
  {
    path: 'a-barraca-do-beijo',
    loadChildren: () => import('./a-barraca-do-beijo/a-barraca-do-beijo.module').then( m => m.ABarracaDoBeijoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
