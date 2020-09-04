import { Injectable } from '@angular/core';
import { TransactionDistribution } from '../model/transaction-distribution';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TransactionDistributionService {

  private transactions: TransactionDistribution[]

  constructor() { 
    this.transactions = [
      {"parentLevel": -1, "level":0, "elementId": 1, "elementName":"General", "regularTransactions": 25, "mobileTransactions": 75},
      {"parentLevel": 0, "level":1, "elementId": 1, "elementName":"Region 01", "regularTransactions": 20, "mobileTransactions": 50},
      {"parentLevel": 0, "level":1, "elementId": 2, "elementName":"Region 02", "regularTransactions": 5, "mobileTransactions": 25}
    ]
  }

  getTransactionDistribution(level, initialDate, finalDate):Observable<TransactionDistribution[]>{
    return of(this.transactions.filter((distribution) => distribution.parentLevel == level)).pipe(delay(200));
  }
}
