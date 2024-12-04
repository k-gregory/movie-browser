import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export class Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;

  constructor(id: number, title: string, release_date: string, overview: string, poster_path: string) {
    this.id = id;
    this.title = title;
    this.release_date = release_date;
    this.overview = overview;
    this.poster_path = poster_path;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  private apiKey = "YOUR_API_KEY";
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMovieReleases(): Observable<Movie[]> {
    const url = `${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(map(response => response.results as Movie[]));
  }

  searchMovies(query: string): Observable<Movie[]> {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<any>(url).pipe(map(response => response.results as Movie[]));
  }
}
