import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IMail } from './mail';

export class MailData implements InMemoryDbService {

	createDb() {
		const mails: IMail[] = [
			{
				mId: 'guid - 1',
				mailFrom: 'Microsoft',
				isDeleted: false,
				unread: true,
				subject: 'Training Program',
				content: 'About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.',
				isFlag: true
			},
			{
				mId: 'guid - 2',
				mailFrom: 'Microsoft',
				isDeleted: false,
				unread: true,
				subject: 'Microsoft Virtual',
				content: 'About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.',
				isFlag: true
			}
		];
		return mails;
	}
}
