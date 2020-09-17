export interface Transaction {
    id: string;
    idAccount: string;
    date: Date;
    description: string;
    currency: string;
    value: number
}
