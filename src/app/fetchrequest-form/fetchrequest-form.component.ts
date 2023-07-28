import { Component } from '@angular/core';
import {RequestService} from "../request-service.service";
import {NgForm} from "@angular/forms";
import {ValueRequestDTO} from "../value-request-dto";

@Component({
  selector: 'app-fetchrequest-form',
  templateUrl: './fetchrequest-form.component.html',
  styleUrls: ['./fetchrequest-form.component.css']
})
export class FetchrequestFormComponent {

  requestId: string;
  valueRequest: ValueRequestDTO;
  public notExistingIdMessage: string;

  constructor(
    private requestService: RequestService,
  ) {}

  onSubmit(valueRequestForm: NgForm) {
    this.requestService.doesExist(this.requestId).subscribe(exists => {
      if (exists) {
        this.requestService.fetchSingleRequest(this.requestId).subscribe(data => {
          this.valueRequest = data;
          this.notExistingIdMessage = "";
          valueRequestForm.resetForm();
        });
      } else {
        this.notExistingIdMessage = "Request [" + this.requestId + "] does not exists";
      }
    })
  }
}
