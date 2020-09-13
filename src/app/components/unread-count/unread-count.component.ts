import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Observable } from 'rxjs';
import { IMail } from 'src/app/shared/mail';


@Component({
  selector: 'app-unread-count',
  templateUrl: './unread-count.component.html',
  styleUrls: ['./unread-count.component.scss']
})
export class UnreadCountComponent implements OnInit {
  unreadCount$: Observable<IMail[]>;
  @Input() public listItem: string;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.unreadCount$ = this.clientService.getMailDetails(this.listItem, 'count');
  }
}
