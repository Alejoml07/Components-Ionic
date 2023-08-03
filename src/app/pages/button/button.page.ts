import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule ,FormsModule,RouterLinkWithHref,ComponentsModule]
})
export class ButtonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
