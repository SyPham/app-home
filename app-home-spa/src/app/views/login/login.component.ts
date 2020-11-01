import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_core/_services/auth.service';
import { AlertifyService } from 'src/app/_core/_services/alertify.service';
import { UserForLogin } from 'src/app/_core/_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserForLogin;
  uri: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertifyService: AlertifyService,
    private authService: AuthService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.uri = params.uri;
    });
   }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }
  login(): void {
    this.authService.login(this.user).subscribe(
      next => {
        this.alertifyService.success('Login Success!!');
        const uri = decodeURI(this.uri);
        if (uri !== 'undefined') {
          this.router.navigate([uri]);
          return;
        }
        this.router.navigate(['/app-home/bpfc']);
      },
      error => {
        this.alertifyService.error('Login failed!!');
      }
    );
  }
}
