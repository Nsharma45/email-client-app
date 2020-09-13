import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';


@Component({
  selector: 'app-mail-folders',
  templateUrl: './mail-folders.component.html',
  styleUrls: ['./mail-folders.component.scss']
})
export class MailFoldersComponent implements OnInit {
  isExpanded = true;
  showSubmenu = true;
  isShowing = false;
  showSubSubMenu = false;
  dataOption: string;
  folderList$ = of([{ type: 'Inbox', icon: 'inbox' },
  { type: 'Spam', icon: 'not_interested' },
  { type: 'Deleted Items', icon: 'delete' },
  { type: 'Custom Folder', icon: 'folder_open' }]);

  constructor() { }

  ngOnInit() {
  }

  getEmailDetails(listItem) {
    this.dataOption = listItem;
  }

}
