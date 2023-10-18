import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
  onceki:any="";

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.onceki=this.activatedroute.snapshot.paramMap.get('deger');
  }

}
