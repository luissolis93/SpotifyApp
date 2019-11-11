import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { encode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  private header: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQAg6w4za1WWPK-o1bZ3JYYfPWuFwmG-Jq1sI7igCXJPqPYWN2xnXY7mPneyXPm-TtLcAEnQOiaYWmFJcSs'
  });

  private URL: string = 'https://api.spotify.com/v1';

  public GETtNewRelase() {
    return this.http.get(`${this.URL}/browse/new-releases?country=ES&limit=12`, { headers: this.header });
  }

  public searchdata(termino, type) {
    termino = encodeURI(termino);
    let urlsend: string = `${this.URL}/search?q=${termino}&type=${type}&market=MX&limit=12`;
    return this.http.get(urlsend, { headers: this.header });
  }

  public getTopTracks(idArtist){
    let url_sent= `${this.URL}/artists/${idArtist}/top-tracks?country=MX`;
    return this.http.get(url_sent, {headers:this.header});
  }

  public getArtist(idArtist){
    let url= `${this.URL}/artists/${idArtist}`;
    
    return this.http.get(url, {headers:this.header});
  }

}