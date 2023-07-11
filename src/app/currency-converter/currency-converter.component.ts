import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'NZD', 'SEK', 'SGD', 'ZAR','MYR'];
  fromCurrency = 'MYR';
  toCurrency = 'USD';
  amount = 1;
  result: number | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.convert();
  }

  convert() {
    const url = `https://api.apilayer.com/exchangerates_data/convert?to=${this.toCurrency}&from=${this.fromCurrency}&amount=${this.amount}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': '7DQ3YocaC8FfK4uHMil9sHb5FirWAEFP'
    });
    const options = { headers: headers };
    this.http.get<any>(url, options).subscribe(response => {
      this.result = response.result;
    });
  }
  

}

