import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-reel',
  templateUrl: './story-reel.component.html',
  styleUrls: ['./story-reel.component.scss']
})
export class StoryReelComponent implements OnInit {

  @Input() background;
  @Input() profile;
  @Input() title;

  constructor() { }

  ngOnInit(): void {
  }

}
