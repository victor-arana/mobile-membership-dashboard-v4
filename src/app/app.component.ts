import { Component } from '@angular/core';
import { TransactionDistributionService } from './services/transaction-distribution.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobile-membership-dashboard-v4';

  constructor(private service: TransactionDistributionService){}
}
