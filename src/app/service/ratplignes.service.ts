import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RatplignesService {

  constructor(private HttpClient: HttpClient) {}
  getLines(){
    return this.HttpClient.get('https://api-ratp.pierre-grimaud.fr/v4/lines/metros');
  }
  getStations(value){
    return this.HttpClient.get(`https://api-ratp.pierre-grimaud.fr/v4/stations/metros/${value}`)
  }
  getHorairesAller(lignes,stations){
    return this.HttpClient.get(`https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/${lignes}/${stations}/A`)
  }
  getHorairesRetour(lignes,stations){
    return this.HttpClient.get(`https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/${lignes}/${stations}/R`)
  }
}
