import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { BankAccount } from './bank-account';
import { Wallet } from './wallet';

export interface User {
    identity: string;
    avatar: string;
    name: string;
    lastLogin: Date;
    accounts: BankAccount[];
    wallets: Wallet[];
    notifications: Notification[];
    messages: Message[];
    jwt: string;
}
