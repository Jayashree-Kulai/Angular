// export interface Movie {
//     Title: string;
//     Year: string;
//     Rated: string;
//     Released: string;
//     Runtime: string;
//     Genre: string;
//     Director: string;
//     Writer: string;
//     Actors: string;
//     Plot: string;
//     Language: string;
//     Country: string;
//     Awards: string;
//     Poster: string;
//     Metascore: string;
//     imdbRating: string;
//     imdbVotes: string;
//     imdbID: string;
//     Type: string;
//     DVD: string;
//     BoxOffice: string;
//     Production: string;
//     Website: string;
//     Response: string;
// }
export interface Movie {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    //urls: Url[];
    startYear: number;
    endYear: number;
    rating: string;
    type: string;
    modified: Date;
    thumbnail: Thumbnail;
    // creators: Creators;
    // characters: Characters;
    // stories: Stories;
    // comics: Comics;
    // events: Events;
    // next: Next;
    // previous?: any;
  }
  export interface Thumbnail {
    path: string;
    extension: string;
  }

  