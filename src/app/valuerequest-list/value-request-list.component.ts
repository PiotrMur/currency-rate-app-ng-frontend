import {Component, OnInit} from '@angular/core';
import {ValueRequestDTO} from "../value-request-dto";
import {RequestService} from "../request-service.service";

@Component({
  selector: 'app-valuerequest-list',
  templateUrl: './value-request-list.component.html',
  styleUrls: ['./value-request-list.component.css']
})
export class ValueRequestListComponent implements OnInit {

  storedRequests: ValueRequestDTO[] = [];

  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
    this.requestService.fetchAllRequests().subscribe(data => {
      this.storedRequests = data;
    });
  }
}
