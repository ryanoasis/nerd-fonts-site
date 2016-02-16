import DS from 'ember-data';

export default DS.Model.extend({
	model() {
		return Ember.$.getJSON('https://api.github.com/repos/ryanoasis/nerd-fonts/releases/latest');
	}
});
