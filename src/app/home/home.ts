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
      this.yesScale += 0.8;
      this.heading = "Think again 😭";
      this.imagePath = "assets/bubu-dudu-bubu.gif"; 
    }

    else if (this.noClickCount === 2) {
      this.heading = "Are you sure? 🤨";
      this.imagePath = "assets/dudu-dudu-angry.gif";
      this.yesScale += 0.8;
    }

    else if (this.noClickCount === 3) {
      this.heading = "Last chance 😡";
      this.imagePath = "assets/giphy.gif";
      this.yesScale += 0.9;
    }

  }

  onYesClick() {
     this.router.navigate(['/wish']);
  }

  

}
