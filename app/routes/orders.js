import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {id: '1', name: 'Anthony'},
      {id: '2', name: 'Tony'}
    ]
  }
});
