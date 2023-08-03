import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPage } from './inicio/inicio.page';
import { AlertPage } from './alert/alert.page';
import { ActionSheetPage } from './action-sheet/action-sheet.page';



@NgModule({
  declarations: [
    InicioPage,
    AlertPage,
    ActionSheetPage
  ],
  exports:[
    InicioPage,
    AlertPage,
    ActionSheetPage
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
