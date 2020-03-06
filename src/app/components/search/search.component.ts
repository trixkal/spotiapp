import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  artists: any[] = [];
  loading: boolean;
  constructor(private spotifyService: SpotifyService) { }

  search(searchTerm: string) {
    console.log(searchTerm);
    this.loading = true;
    this.spotifyService.getArtists(searchTerm)
    .subscribe( (data: any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }

}
