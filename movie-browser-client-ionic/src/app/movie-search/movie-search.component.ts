import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Movie, MoviedbService } from '../moviedb.service';
import { Observable } from 'rxjs';
import { IonThumbnail } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonThumbnail, IonList, IonInput, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class MovieSearchComponent {
  query: string = '';
  movies$!: Observable<Movie[]>;
  
  @Output() movieSelected = new EventEmitter<Movie>();

  constructor(private movieService: MoviedbService, private router: Router) {}

  onSearch(): void {
    if (this.query.trim()) {
      this.movies$ = this.movieService.searchMovies(this.query);
    }
  }

  selectMovie(movie: Movie): void {
     this.router.navigate(['/movie', movie.id]);
  }

}
