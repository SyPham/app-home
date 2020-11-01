import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceInterceptor } from './service.interceptor';
import { AppHomeModule } from './views/app-home/app-home.module';
import { LayoutComponent } from './views/shared/layout/layout.component';
import { NavBarComponent } from './views/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './views/shared/footer/footer.component';
import { P404Component } from './views/shared/p404/p404.component';
import { P500Component } from './views/shared/p500/p500.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    FooterComponent,
    FooterComponent,
    LayoutComponent,
    P404Component,
    P500Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppHomeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
