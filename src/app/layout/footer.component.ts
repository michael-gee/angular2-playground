import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
    <div id="footer-container">

      <p id="footer-text">
        Copyright © 2017 Cegmag Solutions Inc. All rights reserved.
      </p>

      <div id="footer-links">
        <span id="copyd1" class="copyright-divider">|</span>
        <a href="#">Terms of Use</a>
        <span class="copyright-divider">|</span>
        <a href="#">Privacy Policy</a>
      </div>

    </div>
  </footer>
  `,
  styles: [`
    footer {
      background-color: purple;
      clear: both;
      color: white;
      display: flex;
      align-items: center;
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 50px;
    }
    #footer-container {
      margin: 0 auto;
      text-align: center;
    }
    #footer-text {
      display: inline;
    }
    #footer-links {
      display: inline;
      font-size: 1.5em;
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: white;
      text-decoration: underline;
    }
    .copyright-divider {
      margin: 0 3px;
    }
    /* MEDIA QUERIES */
    /* TABLET */
    @media screen and (max-width: 675px) {
      #copyd1 {
        visibility: hidden;
      }
      #footer-links {
        display: block;
      }
    }
    @media screen and (max-width: 445px){
      footer {
        height: 65px;
        font-size: 1em;
      }
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
