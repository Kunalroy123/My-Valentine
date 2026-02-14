import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gifts',
  imports: [RouterLink],
  templateUrl: './gifts.html',
  styleUrl: './gifts.css',
})
export class Gifts {
  constructor(private router: Router) {}

  onYesClick() {
    this.router.navigate(['/love']);
  }
}
