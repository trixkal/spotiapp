import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { }

  accessToken = 'Bearer BQD12lmidxNXhid4G8w-ygkjyFHCp4-ubMqtb4Gd2Lg3kp9Ih4KZ1dAUcsNY-nOfdDHLxJDoZjY8-3Nd90E';

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: this.accessToken
    });
    return this.httpClient.get(url, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
            .pipe( map((data: any) => data.albums.items));
  }

  getArtists(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=artist&limit=15`)
      .pipe( map((data: any) => {
      return data.artists.items;
    }));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map((data: any) => data.tracks));
  }
}
