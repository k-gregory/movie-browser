import { Component, OnInit } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Movie, MoviedbService } from '../moviedb.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MovieCardComponent } from "../movie-card/movie-card.component";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AsyncPipe, MovieCardComponent],
})
export class FeedComponent  implements OnInit {
  movies$?: Observable<Movie[]>;

  constructor(private movieService: MoviedbService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovieReleases();
  }

}
