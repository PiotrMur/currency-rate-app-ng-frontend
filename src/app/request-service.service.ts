import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestDTO} from "./request-dto";
import {Observable} from "rxjs";
import {ValueRequestDTO} from "./value-request-dto";
import {ResponseDTO} from "./response-dto";

@Injectable()
export class RequestService {

  private postRequestUrl: string;
  private getRequestUrl: string;

  constructor(private http: HttpClient) {
    this.postRequestUrl = 'http://localhost:8080/currencies/get-current-currency-value-command';
    this.getRequestUrl = 'http://localhost:8080/currencies/requests';
  }

  public requestCurrencyRate(requestDTO: RequestDTO) {
    return this.http.post<ResponseDTO>(this.postRequestUrl, requestDTO);
  }

  public fetchAllRequests(): Observable<ValueRequestDTO[]> {
    return this.http.get<ValueRequestDTO[]>(this.getRequestUrl);
  }
}
