import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  artistObj: any = {};
  topTracksObj: any[] = [];
  loading: boolean;
  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id).subscribe(artist => {
      this.artistObj = artist;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.loading = true;
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      this.topTracksObj = topTracks;
      console.log(topTracks);
      this.loading = false;
    });
  }

}
