import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fromCurrency = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  requesterName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)])

  constructor(private http: HttpClient) {
  }

  calculateCurrencyRate() {
    if (this.fromCurrency.valid && this.requesterName.valid) {
      const apiUrl = "localhost:8080/currencies/get-current-currency-value-command";

      const body = {
        currency: this.fromCurrency.value,
        name: this.requesterName.value
      };
      this.http.post(apiUrl, body).subscribe((data: any) => {
        console.log(`Rate from ${this.fromCurrency.value}: ${data.rate}`);
      }, error => {
        console.error("There was an error!", error)
      });
    } else {
      console.error("Invalid input date!");
    }
  }
}
