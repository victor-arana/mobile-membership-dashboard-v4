import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TransactionDistribution } from 'src/app/model/transaction-distribution';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() public transactions: TransactionDistribution[]
  @Output() public rowClick: EventEmitter<TransactionDistribution>;
  public selectedRow: TransactionDistribution;

  constructor() {
    this.rowClick = new EventEmitter<TransactionDistribution>(); 
  }

  onRowClick(distribution){
    console.log("distribution: ", distribution);
    this.selectedRow = distribution;
    this.rowClick.emit(this.selectedRow);
  }

  ngOnInit(): void {
  }

}
