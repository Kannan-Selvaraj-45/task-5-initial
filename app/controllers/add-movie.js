import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AddMovieController extends Controller {
  @service router;
  @service movieStore;
  
  @tracked newTitle = '';
  @tracked newDirector = '';

  @action
  updateTitle(event) {
    this.newTitle = event.target.value;
  }

  @action
  updateDirector(event) {
    this.newDirector = event.target.value;
  }

  @action
  addMovie() {
    if (this.newTitle.trim() && this.newDirector.trim()) {
      this.movieStore.addMovie(this.newTitle, this.newDirector);
      
      this.newTitle = '';
      this.newDirector = '';
      
      this.router.transitionTo('movies');
    } else {
      alert('Please enter both title and director');
    }
  }

  @action
  cancel() {
    this.router.transitionTo('movies');
  }
}