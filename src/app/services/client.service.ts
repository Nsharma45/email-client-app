import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IMail } from '../shared/mail';


@Injectable()
export class ClientService {
  itemOption = 'inbox';

  constructor(private httpClient: HttpClient) { }

  getMailDetails(dataOption, typeOfData) {
    if (dataOption === 'Inbox') {
      this.itemOption = 'inbox';
    } else if (dataOption === 'Spam') {
      this.itemOption = 'spam';
    } else if (dataOption === 'Deleted Items') {
      this.itemOption = 'deleted';
    } else if (dataOption === 'Custom Folder') {
      this.itemOption = 'custom';
    }

    const getData$ = this.httpClient.get<IMail[]>('assets/mock-data/' + this.itemOption + '.json');

    if (typeOfData === 'details') {
      return getData$.pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
    } else if (typeOfData === 'count') {
      return getData$.pipe(
        map((mails: IMail[]) => mails.filter(item => item.unread === true))
      );
    }
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }

}
