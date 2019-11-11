import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  public idArtist:string="";
  public Artist:any;
  public TopTracks:any;

  constructor(private _spotifyService:SpotifyService, private activatedRoute:ActivatedRoute) {
    this.idArtist= this.activatedRoute.snapshot.paramMap.get('id');
    this._spotifyService.getTopTracks(this.idArtist).subscribe((data:any)=>{
      this.TopTracks=data.tracks;
      this._spotifyService.getArtist(this.idArtist).subscribe((data)=>{
      this.Artist=data;
      console.log(this.Artist);
              

      });
    });
   }

  ngOnInit() {
  }

}
