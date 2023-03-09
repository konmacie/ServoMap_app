import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoundsQueryParams } from '../interfaces/location-query-params';
import { IUser } from '../models/user';
import { ILocation } from '../models/location';
import { ILocationType } from '../models/location-type';
import { IReport } from '../models/report';
import { ICustomPin } from '../models/custom-pin';

/** Service responsible for api requests. */
@Injectable({
  providedIn: 'root',
})
export class APIService {
  /** API urls used by this service. */
  private _apiUrls = {
    locations: {
      getTypes: 'locations/types/',
      getLocations: 'locations/list/',
      getLocation: (id: number): string => `locations/details/${id}/`,
      favourite: (id: number): string => `locations/details/${id}/favourite/`,
    },
    customPins: {
      listCreate: 'custom-pins/list/',
      retrieveUpdateDelete: (id: number): string =>
        `custom-pins/details/${id}/`,
    },
    reports: {
      postReport: 'locations/report/',
    },
  };

  /** @constructor */
  constructor(private _http: HttpClient) {}

  /** Returns observable of all location types. */
  getTypes(): Observable<ILocationType[]> {
    return this._http.get<ILocationType[]>(this._apiUrls.locations.getTypes);
  }

  /** Returns observable of locations meeting the given query params. */
  getLocations(params: IBoundsQueryParams): Observable<ILocation[]> {
    return this._http.get<ILocation[]>(this._apiUrls.locations.getLocations, {
      params: params as any,
    });
  }

  getLocationDetails(id: number): Observable<ILocation> {
    return this._http.get<ILocation>(this._apiUrls.locations.getLocation(id));
  }

  postReport(report: IReport): Observable<void> {
    return this._http.post<void>(this._apiUrls.reports.postReport, report);
  }

  addFavourite(id: number): Observable<any> {
    return this._http.post(this._apiUrls.locations.favourite(id), {});
  }

  removeFavourite(id: number): Observable<any> {
    return this._http.delete(this._apiUrls.locations.favourite(id));
  }

  listCustomPins(): Observable<ICustomPin[]> {
    return this._http.get<ICustomPin[]>(this._apiUrls.customPins.listCreate);
  }

  createCustomPin(pin: ICustomPin): Observable<ICustomPin> {
    return this._http.post<ICustomPin>(
      this._apiUrls.customPins.listCreate,
      pin
    );
  }

  retrieveCustomPin(id: number): Observable<ICustomPin> {
    return this._http.get<ICustomPin>(
      this._apiUrls.customPins.retrieveUpdateDelete(id)
    );
  }

  updateCustomPin(pin: ICustomPin): Observable<ICustomPin> {
    return this._http.put<ICustomPin>(
      this._apiUrls.customPins.retrieveUpdateDelete(pin.id!),
      pin
    );
  }

  deleteCustomPin(id: number): Observable<any> {
    return this._http.delete(this._apiUrls.customPins.retrieveUpdateDelete(id));
  }
}
