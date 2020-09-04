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

  private transactions: TransactionDistribution[];

  constructor(private service: TransactionDistributionService){}

  ngOnInit(): void {
    this.service.getTransactionDistribution(0,new Date(), new Date()).subscribe(d => this.transactions = d);
  }

}
