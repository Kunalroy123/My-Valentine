import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-wish',
  standalone: true,
  templateUrl: './wish.html',
  styleUrl: './wish.css',
})
export class Wish {
  constructor(private router: Router) {}

  onYesClick() {
     this.router.navigate(['/gifts']);
  }
}
