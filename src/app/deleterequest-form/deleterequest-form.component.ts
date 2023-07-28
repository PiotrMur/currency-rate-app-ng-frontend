import { Component } from '@angular/core';
import {RequestService} from "../request-service.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-fetchrequest-form',
  templateUrl: './deleterequest-form.component.html',
  styleUrls: ['./deleterequest-form.component.css']
})
export class DeleterequestFormComponent {

  requestId: string;
  public deleteSuccessMessage: string;
  public deleteFailureMessage: string;

  constructor(
    private requestService: RequestService,
  ) {}

  onSubmit(valueRequestForm: NgForm) {
    this.requestService.doesExist(this.requestId).subscribe(exists => {
      if (exists) {
        this.requestService.delete(this.requestId).subscribe(() => {
          this.deleteSuccessMessage = "Request [" + this.requestId + "] was deleted";
          this.deleteFailureMessage = "";
          valueRequestForm.resetForm();
        });
      } else {
        this.deleteFailureMessage = "This request has been already deleted";
        this.deleteSuccessMessage = "";
      }
    })
  }
}
