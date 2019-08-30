import { Component,OnInit } from '@angular/core';
import { RatplignesService } from './service/ratplignes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'INFO -  METRO';
  lignes:any;
  stations: any;
  valueFinal: any[];
  stationFinal: String;
  horaireAller: String;
  horaireRetour:String;
  directionAller: String;
  directionRetour: String;
  resultat: any;
  directionAllerDefault : String;
  directionRetourDefault: String;
  horaireAllerDefault:String;
  horaireRetourDefault: String;
  constructor( private ratplignes: RatplignesService   ){
  }
  ngOnInit(){ this.getHorairesAllerDefault(), this.getHorairesRetourDefault()}
  getHorairesAllerDefault(){
    this.ratplignes.getHorairesAllerDefault().subscribe((data)=>{
      this.resultat = data;
      this.horaireAllerDefault = this.resultat.result.schedules;
      this.directionAllerDefault=this.resultat.result.schedules[0].destination; 

    })
  }
  getHorairesRetourDefault(){
      this.ratplignes.getHorairesRetourDefault().subscribe((data)=>{
        this.resultat = data;
        this.horaireRetourDefault = this.resultat.result.schedules;
        this.directionRetourDefault=this.resultat.result.schedules[0].destination; 
      })
  }

  getLines(){
    this.ratplignes.getLines().subscribe((data)=>{
      this.resultat = data;
      this.lignes= this.resultat.result.metros
    })
  }
  getStations(value){
    this.valueFinal= value.split(' ');
    this.ratplignes.getStations(this.valueFinal[1]).subscribe((data)=>{
      console.log(this.valueFinal[1])
      /* this.stations = data.result.stations; */
      this.resultat= data;
      this.stations= this.resultat.result.stations;
          })

  }
  getHoraires(stations){
    this.stationFinal = stations.toLowerCase().split(' ').join('+');
    this.ratplignes.getHorairesAller(this.valueFinal[1],this.stationFinal).subscribe((data)=>{
      console.log(data);
      this.resultat= data;
      this.horaireAller = this.resultat.result.schedules;
      this.directionAller = this.resultat.result.schedules[0].destination;
    })
    this.ratplignes.getHorairesRetour(this.valueFinal[1],this.stationFinal).subscribe((data)=>{
      console.log(data);
      this.resultat= data;
      this.horaireRetour= this.resultat.result.schedules;
      this.directionRetour = this.resultat.result.schedules[0].destination;

    })

  }
}
