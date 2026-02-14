import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-letter',
  imports: [],
  templateUrl: './letter.html',
  styleUrl: './letter.css',
})
export class Letter {
  constructor(private router: Router) {}

  onYesClick() {
    this.router.navigate(['/gifts']);
  }
}
