import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicioo',
  templateUrl: './inicioo.page.html',
  styleUrls: ['./inicioo.page.scss'],
})
export class IniciooPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  segmentChanged(event : any){
    console.log(event)
    let ruta=event.detail.value 
    this.router.navigate(['inicioo/'+ruta])
  }

}
