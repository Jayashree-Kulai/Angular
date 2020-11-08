import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie';
import { from } from 'rxjs';
import { MovieService } from 'src/app/service/movie.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  movieList: Movie[];

  constructor( private movieService : MovieService ) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieList = this.movieService.getSavedMovies();
  }

}
