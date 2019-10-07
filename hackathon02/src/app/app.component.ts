import { Component, OnInit } from '@angular/core';
import { KymaService } from '@spartacus/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackathon01';

  constructor( private kymaService: KymaService) {}

  public getToken() {
    console.log('Get Token');
    console.log(this.kymaService.getOpenIdToken());
  }
}
