import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TransactionDistribution } from 'src/app/model/transaction-distribution';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private transactions: TransactionDistribution[]
  @Output() public rowClick: EventEmitter<TransactionDistribution>;
  public selectedRow: TransactionDistribution;

  constructor() {
    this.rowClick = new EventEmitter<TransactionDistribution>(); 
    this.transactions = [
      {"parentLevel": -1, "level":0, "elementId": 1, "elementName":"General", "regularTransactions": 25, "mobileTransactions": 75},
      {"parentLevel": 0, "level":1, "elementId": 1, "elementName":"Region 01", "regularTransactions": 20, "mobileTransactions": 50},
      {"parentLevel": 0, "level":1, "elementId": 2, "elementName":"Region 02", "regularTransactions": 5, "mobileTransactions": 25}
    ]
  }

  onRowClick(distribution){
    console.log("distribution: ", distribution);
    this.selectedRow = distribution;
    this.rowClick.emit(this.selectedRow);
  }

  ngOnInit(): void {
  }

}
