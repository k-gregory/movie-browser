import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonList, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Movie, MoviedbService } from '../moviedb.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, CommonModule, IonHeader,IonContent, IonToolbar, IonList, IonItem, IonTitle]
})
export class MovieDetailsComponent  implements OnInit {

  movie?: Movie;

  constructor(private movieService: MoviedbService, private route: ActivatedRoute, private router: Router) {
    addIcons({close});
  }
  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];
    this.movieService.getMovieDetails(movieId).subscribe(movie => this.movie = movie);
  }

  closeDetails(): void {
    this.router.navigate(['/tabs']);
  }

}
