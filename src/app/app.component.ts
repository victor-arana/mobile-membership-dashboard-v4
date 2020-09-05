import { Component } from '@angular/core';
import { TransactionDistributionService } from './services/transaction-distribution.service';
import { TransactionDistribution } from './model/transaction-distribution';
import { AmChartsService } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobile-membership-dashboard-v4';

  public transactions: TransactionDistribution[];
  private chart: any;

  constructor(private service: TransactionDistributionService,
              private amChartsService: AmChartsService){}

  ngOnInit(): void {
    this.service.getTransactionDistribution(0, 1, new Date(), new Date()).subscribe(d => this.transactions = d);
    this.chart = this.amChartsService.makeChart("chartdiv",{
      "type"    : "pie",
      "titleField"  : "category",
      "valueField"  : "column-1",
      "dataProvider"  : [
        {
          "category": "category 1",
          "column-1": 5
        },
        {
          "category": "category 2",
          "column-1": 1
        }
      ]
    });
  }

  onRowClick(row){
    console.log("Row: ", row);
    this.service.getTransactionDistribution(row.level, row.elementId, new Date(), new Date()).subscribe(d => this.transactions = d);
  }

  onItemSelect(row){
    console.log("Item selected:", row);
    this.service.getTransactionDistribution(row.level, row.elementId, new Date(), new Date()).subscribe(d => this.transactions = d);
  }

}
