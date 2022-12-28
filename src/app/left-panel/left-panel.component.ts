import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  title = "Twitter"

  number = 10000;

  constructor(public router: Router) {

  }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['/home'])
  }

  // displayMyName(){
  //   return "This is Raz" + this.title
  // }

  // showName(){
  //   alert("James")
  // }

  // increase(){
  //   this.number++
  // }

  // decrease(){
  //   this.number--
  // }

}
