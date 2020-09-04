import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionDistributionService } from './services/transaction-distribution.service';
import { TableComponent } from './dashboard/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TransactionDistributionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
