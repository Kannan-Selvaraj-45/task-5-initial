import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MovieStoreService extends Service {
  @service flashMessages;
  @tracked movies = [
    { id: 1, title: 'Interstellar (2014)', director: 'Nolan' },
    { id: 2, title: 'Avengers (2012)', director: 'Joss Whedon' },
    { id: 3, title: 'Inception (2010)', director: 'Christopher Nolan' },
  ];

  get movies() {
    return this.movies;
  }

  @action
  addMovie(title, director) {
    let newId = this.movies.length
      ? this.movies[this.movies.length - 1].id + 1
      : 1;
    
    this.movies = [
      ...this.movies,
      { id: newId, title, director },
    ];
    
    console.log('Movie added:', { id: newId, title, director });
    console.log('Current movies:', this.movies);
    this.flashMessages.success("New movie added Successfully!")
    return true;
  }

  @action
  deleteMovie(id) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    this.flashMessages.danger("Movie deleted Successfully!")
  }

  @action
  updateMovie(id, title, director) {
    this.movies = this.movies.map((movie) =>
      movie.id === id ? { ...movie, title, director } : movie
    );
    this.flashMessages.info("Movie updated Successfully!")
  }
}