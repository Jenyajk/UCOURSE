import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {MainComponent} from "./pages/main/main.component";
import {MathComponent} from "./pages/math/math.component";
import {ItComponent} from "./pages/it/it.component";
import {VideoComponent} from "./components/video/video.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'it',
    component: ItComponent,
  },
  {
    path: 'math',
    component: MathComponent,
  },
  {
    path: 'v',
    component: VideoComponent,
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
