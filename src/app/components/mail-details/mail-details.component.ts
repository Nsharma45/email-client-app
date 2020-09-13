import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { IMail } from 'src/app/shared/mail';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.scss']
})
export class MailDetailsComponent implements OnInit, OnChanges {
  mailData$: Observable<IMail[]>;
  errorMessage = '';
  mailDetail: IMail[];

  @Input() public dataOption: string;
  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.mailData$ = this.clientService.getMailDetails(this.dataOption, 'details');
  }

  showMailDetails(mailData) {
    if (mailData.unread) {
      mailData.unread = false;
    }
    this.mailDetail = mailData;
  }

  markAsFlaged(mailData) {
    mailData.isFlag = true;
  }
  markAsUnFlag(mailData) {
    mailData.isFlag = false;
  }
  onDelete(mailData) {
    mailData.isDeleted = true;
  }


}
