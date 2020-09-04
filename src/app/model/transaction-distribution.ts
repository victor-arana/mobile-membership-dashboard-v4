export interface TransactionDistribution {
    parentLevel: number;
    parentId: number;
    level: number;
    elementId: number;
    elementName: string;
    regularTransactions: number;
    mobileTransactions: number;
}
