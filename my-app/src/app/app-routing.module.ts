import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {MainComponent} from "./pages/main/main.component";
import {MathComponent} from "./pages/math/math.component";
import {ItComponent} from "./pages/it/it.component";
import {SmmComponent} from "./pages/smm/smm.component";
import {TedComponent} from "./pages/ted/ted.component";
import {AlgorithmsDataComponent} from "./pages/algorithms-data/algorithms-data.component";
import {DataScienceComponent} from "./pages/data-science/data-science.component";
import {AuthComponent} from "./pages/auth/auth.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'it',
    component: ItComponent,
  },
  {
    path: 'math',
    component: MathComponent,
  },
  {
    path: 'smm',
    component: SmmComponent,
  },
  {
    path: 'algorithms-data-structures',
    component: AlgorithmsDataComponent,
  },
  {
    path: 'ted',
    component: TedComponent,
  },
  {
    path: 'data-science',
    component: DataScienceComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
