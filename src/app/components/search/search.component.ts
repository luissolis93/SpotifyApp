import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {debounceTime} from 'rxjs/operators'
import {Router} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public searchFilter:Array<String>=['track','artist'];
  public searResult:any=[];
  public loading:boolean=true;

  constructor(private _spotifyService:SpotifyService, private router:Router) { }

  ngOnInit() {

  }
  public search(busqueda,termino){
    if(busqueda=='null' || termino=="" || termino==" ")return;
      this._spotifyService.searchdata(termino,busqueda).pipe(debounceTime(2000)).subscribe((data:any)=>{
        // console.log(data);
        
        if(data.tracks){
        this.searResult=data.tracks.items;
        }else{
          this.searResult=data.artists.items;
        }
      console.log(this.searResult);
      });  
  }

  public GoToArtist(ArtistID){
    this.router.navigate(['/artist',ArtistID]);
            
  }

}
