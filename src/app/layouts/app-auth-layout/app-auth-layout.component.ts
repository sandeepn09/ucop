import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-app-auth-layout',
  templateUrl: './app-auth-layout.component.html',
  styleUrls: ['./app-auth-layout.component.scss']
})
export class AppAuthLayoutComponent implements OnInit, OnDestroy {

  test: Date = new Date();
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    var html = document.getElementsByTagName("html")[0];
    // html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    var navbar = document.getElementsByClassName("navbar-horizontal")[0];
    navbar.classList.add("navbar-light");
    navbar.classList.add("navbar-transparent");
  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    // html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
    var navbar = document.getElementsByClassName("navbar-horizontal")[0];
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("navbar-transparent");
  }
}
