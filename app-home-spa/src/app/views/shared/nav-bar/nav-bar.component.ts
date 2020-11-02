import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AlertifyService } from 'src/app/_core/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  skipLinkPath: string;
  constructor(private location: Location,
              private alertify: AlertifyService,
              private router: Router,
    ) { }

  ngOnInit() {
    this.skipLinkPath = `${this.location.path()}#mainContent`;
  }
  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.alertify.message('Logged out');
    const uri = this.router.url;
    this.router.navigate(['login'], { queryParams: { uri } });
  }
}
