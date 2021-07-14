import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  posts = [
    {
      title: "Neat Tree",
      username: "@nature",
      content: "Saw this awesome tree during my hike today.",
      imageURL: "assets/tree.jpeg"
    },
    {
      title: "Snowy Mountain",
      username: "@mountainLover",
      content: "here is a picture of snowy mountain",
      imageURL: "assets/mountain.jpeg"
    },
    {
      title: "Mountain Biking",
      username: "@biking22",
      content: "I did some biking in this place",
      imageURL: "assets/biking.jpeg"
    },
  ]
}
