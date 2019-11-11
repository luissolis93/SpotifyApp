import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public NewReleases:Array<any>=[];

  constructor(private _spotifyService:SpotifyService) { 
    this._spotifyService.GETtNewRelase().subscribe((relases:any)=>{
      this.NewReleases=relases.albums.items;
      console.log(this.NewReleases);     
    });
    
  }

  ngOnInit() {
  }

}
