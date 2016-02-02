import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    let result = this.transitionTo('/terminal');
    // result is a promise. This only happens when passing in a url.
    // result should be a transition object according to docs: http://emberjs.com/api/classes/Ember.Route.html#method_transitionTo
    console.log(result);
  }
});
