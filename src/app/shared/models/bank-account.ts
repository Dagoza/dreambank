import { Transaction } from './transaction';

export interface BankAccount {
    id: string;
    name: string;
    icon: string;
    type: string;
    status: string;
    currency: string;
    balance: number;
    transactions: Transaction[]
}
