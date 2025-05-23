import EmberRouter from '@ember/routing/router';
import config from 'ember-task/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('movies', { path: '/' });
  this.route('add-movie');
  this.route('edit-movie', { path: '/edit-movie/:id' });
});
