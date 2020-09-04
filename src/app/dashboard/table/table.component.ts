import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TransactionDistribution } from 'src/app/model/transaction-distribution';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() public transactions: TransactionDistribution[]
  @Output() public rowClick: EventEmitter<TransactionDistribution>;
  public selectedRow: TransactionDistribution;

  constructor() {
    this.rowClick = new EventEmitter<TransactionDistribution>(); 
  }

  onRowClick(distribution){
    this.selectedRow = distribution;
    this.rowClick.emit(this.selectedRow);
  }

}
