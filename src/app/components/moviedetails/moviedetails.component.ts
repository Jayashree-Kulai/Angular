import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/interface/movie';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  movie: Movie;
  constructor( private movieService : MovieService,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.loadMovie()
  }

  loadMovie(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(response => {
      this.movie = response;
      console.log(response);
    });
  }

}
