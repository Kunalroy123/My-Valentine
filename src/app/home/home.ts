import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  noClickCount = 0;
  heading = "Will you be mine 🥺?";
  imagePath = "assets/bubu-dudu.gif";
  yesScale = 1;

  onNoClick() {
    this.noClickCount++;

    if (this.noClickCount === 1) {
      this.yesScale += 1.3;
      this.heading = "Think again 😭";
      this.imagePath = "assets/bubu-dudu-bubu.gif"; 
    }

    else if (this.noClickCount === 2) {
      this.heading = "Last chance 😡";
      this.imagePath = "assets/giphy.gif";
      this.yesScale += 1.3;
    }
  }

  onYesClick() {
     this.router.navigate(['/wish']);
  }

  

}
