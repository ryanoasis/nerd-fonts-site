import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
//import emberTemplateCompiler from 'ember';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

App.Post = Ember.Object.extend({

});

App.PostController = Ember.Controller.extend({
	author: function() {
	  //debugger;
	return [this.get('salutation'), this.get('name')].join(' ');
  }.property('salutation', 'name')
});

App.PostView = Ember.Component.extend({
	// the controller is the initial context for the template
	controller: null,
	template: Ember.Handlebars.compile("<h1>{{title}}</h1><h2>{{author}}</h2><div>{{body}}</div>")
});

var post = App.Post.create();
var postController = App.PostController.create({ model: post });

App.PostView.create({ controller: postController }).appendTo('body');

jQuery.getJSON("https://api.github.com/repos/ryanoasis/nerd-fonts/git/trees/master?recursive=1", function(json) {
	post.setProperties(json);
});

export default App;
