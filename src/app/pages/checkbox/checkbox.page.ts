import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLinkWithHref,ComponentsModule]
})
export class CheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = [
    {
      name: 'primary',
      selected: true
    },
    {
      name: 'secundary',
      selected: false
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }

  ]
  onClick(item: any){
    console.log(item)
  }
  
  verData(){
    console.log(this.data)
  }

}
