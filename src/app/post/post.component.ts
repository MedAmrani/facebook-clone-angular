import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() profile;
  @Input() username;
  @Input() message;
  @Input() image;


  constructor() { }

  ngOnInit(): void {
  }

}
