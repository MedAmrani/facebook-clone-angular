import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-row',
  templateUrl: './sidebar-row.component.html',
  styleUrls: ['./sidebar-row.component.scss']
})
export class SidebarRowComponent implements OnInit {

  @Input() title:string;
  @Input() icon:string;
  @Input() src:string;
  constructor() { }

  ngOnInit(): void {
  }

}
