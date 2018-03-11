import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="main-container">
      <header class="header-3">
        <div class="branding">
          <a class="nav-link">
            <clr-icon shape="home" size="24"></clr-icon>
            <span class="title">Easy Notify</span>
          </a>
        </div>
      </header>
      <div class="content-container">
        <div class="content-area">
          Sorry, we can't find this page!
        </div>
      </div>
    </div>
  `,
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
