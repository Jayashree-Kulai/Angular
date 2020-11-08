import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/interface/movie';

@Component({
  selector: 'app-movielisting',
  templateUrl: './movielisting.component.html',
  styleUrls: ['./movielisting.component.scss']
})
export class MovielistingComponent implements OnInit {
  pageNo = 1;
  movies: Movie[];
  isLoading = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.isLoading = true;
    this.movies = [];
    this.movieService.getMovies(this.pageNo).subscribe(response => {
      this.movies = response.Search;
      console.log('MOVIES', this.movies);
      this.isLoading = false;
    });
  }

  paginate(direction): void {
    this.pageNo += direction;
    this.loadMovies();
  }

  addtoWishList(event: MouseEvent, movie: Movie): void {
    this.movieService.saveMovie(movie);
    event.stopPropagation();
  }

}
