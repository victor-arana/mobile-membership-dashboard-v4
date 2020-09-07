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
  title = 'Mobile Membership Dashboard';

  public transactions: TransactionDistribution[];
  private chart: any;

  constructor(private service: TransactionDistributionService,
              private amChartsService: AmChartsService){
    this.transactions = [
      {"parentLevel": -1, "parentId":1, "level":0, "elementId": 1, "elementName":"General", "regularTransactions": 10, "mobileTransactions": 90}
    ];          
  }

  ngOnInit(): void {
    this.service.getTransactionDistribution(0, 1, new Date(), new Date()).subscribe(d => this.transactions = d);
    this.chart = this.amChartsService.makeChart("chartdiv",{
      "type"    : "pie",
      "titleField"  : "level",
      "theme": "light",
      "startDuration": 0,
      "startEffect": "easeOutSine",
      "valueField"  : "column-1",
      "dataProvider"  : this.generateData(this.transactions[0])
    });
  }

  generateData(transaction){
    return [
      {
        "level": "Regular",
        "column-1": transaction.regularTransactions
      },
      {
        "level": "Mobile",
        "column-1": transaction.mobileTransactions
      }
    ];
  }

  onRowClick(row){
    console.log("Row: ", row);
    this.service.getTransactionDistribution(row.level, row.elementId, new Date(), new Date()).subscribe(d => this.transactions = d);
    this.chart = this.amChartsService.makeChart("chartdiv",{
      "type"    : "pie",
      "titleField"  : "level",
      "valueField"  : "column-1",
      "dataProvider"  : this.generateData(row)
    });

  }

  onItemSelect(row){
    console.log("Item selected:", row);
    this.service.getTransactionDistribution(row.level, row.elementId, new Date(), new Date()).subscribe(d => this.transactions = d);
    this.chart = this.amChartsService.makeChart("chartdiv",{
      "type"    : "pie",
      "theme": "light",
      "startDuration": 0,
      "startEffect": "easeInSine",
      "titleField"  : "level",
      "valueField"  : "column-1",
      "dataProvider"  : this.generateData(row)
    });
  }

}
