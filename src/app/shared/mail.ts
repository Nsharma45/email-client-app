export interface IMail {
    mId: string;
    mailFrom: string;
    subject: string;
    isDeleted: boolean;
    content: string;
    unread: boolean;
    isFlag: boolean;
}

