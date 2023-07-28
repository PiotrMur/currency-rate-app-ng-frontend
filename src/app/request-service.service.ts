import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestDTO} from "./request-dto";
import {catchError, map, Observable, throwError} from "rxjs";
import {ValueRequestDTO} from "./value-request-dto";
import {ResponseDTO} from "./response-dto";

@Injectable()
export class RequestService {

  private postRequestUrl: string;
  private getRequestUrl: string;
  private getSingleRequestUrl: string;
  private deleteRequestUrl: string;

  constructor(private http: HttpClient) {
    this.postRequestUrl = 'http://localhost:8080/currencies/get-current-currency-value-command';
    this.getRequestUrl = 'http://localhost:8080/currencies/requests';
    this.getSingleRequestUrl = 'http://localhost:8080/currencies/requests/';
    this.deleteRequestUrl = 'http://localhost:8080/currencies/delete-request/';
  }

  public requestCurrencyRate(requestDTO: RequestDTO) {
    return this.http.post<ResponseDTO>(this.postRequestUrl, requestDTO)
      .pipe(catchError(err => {return throwError(err.error)}));
  }

  public fetchAllRequests(): Observable<ValueRequestDTO[]> {
    return this.http.get<ValueRequestDTO[]>(this.getRequestUrl);
  }

  public fetchSingleRequest(requestId: string): Observable<ValueRequestDTO> {
    return this.http.get<ValueRequestDTO>(this.getSingleRequestUrl+ requestId);
  }

  public delete(requestId: string): Observable<any> {
    return this.http.delete<any>(this.deleteRequestUrl + requestId)
  }

  public doesExist(requestId: string): Observable<boolean> {
    return this.http.get<ValueRequestDTO[]>(this.getRequestUrl)
      .pipe(map(requests => requests.some(request => request.id === requestId)));
  }
}
