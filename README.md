# Transition-to-bug

[Reproduces a bug](https://github.com/asakusuma/transition-to-bug/blob/master/app/routes/index.js) in ember canary where [route.transitionTo](http://emberjs.com/api/classes/Ember.Route.html#method_transitionTo) returns a promise when passed a url.

Looks like the issue was [introduced in this commit](https://github.com/emberjs/ember.js/commit/ef7108a8d1a97fc263918a0fd37db72889419b4c#diff-985dc4a078da4636eff18be21aa7f9e6L303).
