import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router){}

  goToVerify(){
    this.router.navigate(["/veify"]);
  }

  ngOnInit(): void {
  }

}
