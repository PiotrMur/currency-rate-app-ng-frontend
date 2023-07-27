import {Component} from '@angular/core';
import {RequestDTO} from "../request-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../request-service.service";
import {ResponseDTO} from "../response-dto";

@Component({
  selector: 'app-valuerequest-form',
  templateUrl: './valuerequest-form.component.html',
  styleUrls: ['./valuerequest-form.component.css']
})
export class ValuerequestFormComponent {

  requestDTO: RequestDTO;
  returnedCurrencyRateValue: ResponseDTO = {value:0};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService) {
    this.requestDTO = new RequestDTO();
  }

  onSubmit() {
    this.requestService.requestCurrencyRate(this.requestDTO).subscribe(result => this.returnedCurrencyRateValue = result);
  }
}
