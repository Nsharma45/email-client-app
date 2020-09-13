import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit, OnChanges {
  @Input() public mailDetail: string;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
  }

}
