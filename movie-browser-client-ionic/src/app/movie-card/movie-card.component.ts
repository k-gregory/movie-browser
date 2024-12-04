import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle, IonButton } from '@ionic/angular/standalone';
import { Movie } from '../moviedb.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardSubtitle, IonCardHeader, IonCardContent, IonCardTitle, IonCard],
})
export class MovieCardComponent  implements OnInit {
  @Input() movie!: Movie;
  @Output() watchlistAdded = new EventEmitter<Movie>();

  addToWatchlist() {
    this.watchlistAdded.emit(this.movie);
  }

  constructor() { }

  ngOnInit() {}

}
