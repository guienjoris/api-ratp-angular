import { Component } from '@angular/core';
import { RatplignesService } from './service/ratplignes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'INFO -  METRO';
  lignes:4;
  stations: any;
  valueFinal: [0,4];
  stationFinal: "mairie+de+montrouge";
  horaireAller: String;
  horaireRetour:String;
  directionAller: String;
  directionRetour: String;
  result : any[];
  constructor( private ratplignes: RatplignesService  ){
  }
  
  getLines(){
    this.ratplignes.getLines().subscribe((data)=>{
      this.lignes=data.result.metros; 
    })
  }
  getStations(value){
    this.valueFinal= value.split(' ');
    this.ratplignes.getStations(this.valueFinal[1]).subscribe((data)=>{
      console.log(this.valueFinal[1])
      this.stations = data.result.stations;
          })

  }
  getHoraires(stations){
    this.stationFinal = stations.toLowerCase().split(' ').join('+');
    this.ratplignes.getHorairesAller(this.valueFinal[1],this.stationFinal).subscribe((data)=>{
      console.log(data);
      this.horaireAller = data.result.schedules;
      this.directionAller = data.result.schedules[0].destination;
    })
    this.ratplignes.getHorairesRetour(this.valueFinal[1],this.stationFinal).subscribe((data)=>{
      console.log(data);
      this.horaireRetour= data.result.schedules;
      this.directionRetour = data.result.schedules[0].destination;

    })

  }
}
