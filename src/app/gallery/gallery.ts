import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { hidden } from '@angular/forms/signals';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  constructor(private router: Router) {}

  pictures = [
  { src: 'assets/pic1.jpg', caption: 'Sweet Hello' },
  { src: 'assets/pic8.jpg', caption: 'True Smile' },
  { src: 'assets/pic3.jpg', caption: 'Perfect Day' },
  { src: 'assets/pic4.jpg', caption: 'Only Us', style:{hieght: '150px' }},
  { src: 'assets/pic6.jpg', caption: 'My Home' },
  { src: 'assets/pic2.jpg', caption: 'Forever Us' }
];


  onYesClick() {
    this.router.navigate(['/gifts']);
  }
}
