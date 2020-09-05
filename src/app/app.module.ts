import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionDistributionService } from './services/transaction-distribution.service';
import { TableComponent } from './dashboard/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MaterialTableComponent } from './dashboard/material-table/material-table.component';
import { AmChartsModule } from '@amcharts/amcharts3-angular';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MaterialTableComponent
  ],
  imports: [
    AmChartsModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [TransactionDistributionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
