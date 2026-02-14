import { Component, ChangeDetectorRef } from '@angular/core';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quize',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quize.html',
  styleUrls: ['./quize.css'],
})
export class Quize {
  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  currentIndex = 0;
  isLocked = false;
  isCompleted = false;
  result = "";

  questions = [
    {
      question: "Who is absolute 'Boss' in the relationship😎?",
      options: ["Obviously You", "Me", "No One"],
      correct: 0 
    },
    {
      question: "Who fights a lot in the relationship?🤧",
      options: ["Always You", "No One", "Me"],
      correct: 2
    },
    {
      question: "Where do i plan to spend the rest of my life?😚",
      options: ["Paris", "In Your Heart", "On Mountains"],
      correct: 1
    }
  ];

selectAnswer(index: number) {
  if (this.isLocked || this.isCompleted) return;

  const correctIndex = this.questions[this.currentIndex].correct;

  if (index === correctIndex) {

    this.result = "Correct! You're so smart😝";
    this.isLocked = true;

    setTimeout(() => {
      console.log("Before increment:", this.currentIndex);
      this.currentIndex++;
      console.log("After increment:", this.currentIndex);
      if (this.currentIndex >= this.questions.length) {
        this.isCompleted = true;
        this.result = "All answers correct 😍 You're perfect!";
      } else {
        this.result = "";
        this.isLocked = false;
      }
      this.cdr.detectChanges();
    }, 1000);

  } else {
    this.result = "Ooho, please try again!";
  }
}
  onYesClick() {
    this.router.navigate(['/gifts']);
  }
}
