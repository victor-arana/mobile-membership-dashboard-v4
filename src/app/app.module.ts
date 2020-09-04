import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionDistributionService } from './services/transaction-distribution.service';
import { TableComponent } from './dashboard/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [TransactionDistributionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
