import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransactionDistribution } from 'src/app/model/transaction-distribution';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  columnsToDisplay = ['level', 'regularTransactions', 'mobileTransactions'];
  
  @Input() public source: Observable<TransactionDistribution[]>;
  @Output() private itemSelect: EventEmitter<TransactionDistribution>;
  public distributions: TransactionDistribution[]

  constructor() { 
    this.itemSelect = new EventEmitter<TransactionDistribution>();
  }

  ngOnInit(): void {}

  onItemSelect(row){
    console.log("Click on row: ", row);
    this.itemSelect.emit(row);
  }

}
