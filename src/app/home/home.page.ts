import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ad:any="Erinç";
  soyad:any="fghj";
  constructor(private router:Router) {}

  detayaGit()
  {
    //this.router.navigateByUrl("/detay");
    this.router.navigate(['/detay',{deger:this.ad}])
  }
}
