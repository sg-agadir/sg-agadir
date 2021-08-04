import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.sass']
})
export class VerifyComponent implements OnInit {

  constructor(private router:Router){}

  goToVerify(){
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
  }

}
