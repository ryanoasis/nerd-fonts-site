import DS from 'ember-data';

export default DS.Model.extend({
	uri: DS.attr(),
	name: DS.attr(),
	size: DS.attr()//,
	/*fullName: Ember.computed('firstName', 'lastName', function() {
		return "${this.get('firstName')} ${this.get('lastName')}";
	})*/
});
