import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
films=[
  {titre:'anges & demons', affiche:'../assets/ange.jpg', duree:120},
  {titre:'coco', affiche:'../assets/coco.jpg', duree:88},
  {titre:'coeur nomade', affiche:'../assets/nomade.bmp', duree:97}
];
titre="Films à voir aujourd'hui";
profil=["retaite","Etudiant","Autre"];
datejour=new Date();
ch="Autre";
  constructor() { }

  ngOnInit() {
  }

}
