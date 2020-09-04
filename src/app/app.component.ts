import { Component } from '@angular/core';
import { TransactionDistributionService } from './services/transaction-distribution.service';
import { TransactionDistribution } from './model/transaction-distribution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobile-membership-dashboard-v4';

  public transactions: TransactionDistribution[];

  constructor(private service: TransactionDistributionService){}

  ngOnInit(): void {
    this.service.getTransactionDistribution(0, 1, new Date(), new Date()).subscribe(d => this.transactions = d);
  }

  onRowClick(row){
    console.log("Row: ", row);
    this.service.getTransactionDistribution(row.level, row.elementId, new Date(), new Date()).subscribe(d => this.transactions = d);
  }

}
