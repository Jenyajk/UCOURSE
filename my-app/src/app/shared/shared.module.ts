import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from "../ui/ui.module";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent  ],
  imports: [
    CommonModule,
    UiModule,
    MatMenuModule
  ],
  exports: [
    UiModule,
    HeaderComponent,
    FooterComponent,
    MatMenuModule]
})
export class SharedModule { }
