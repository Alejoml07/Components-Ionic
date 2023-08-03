import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLinkWithHref,ComponentsModule ]
})
export class AlertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public alertButtons = ['OK'];
  
}

