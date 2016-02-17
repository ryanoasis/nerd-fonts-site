import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		var _this = this;
		var data = [];
		//Ember.$.getJSON('https://api.github.com/repos/ryanoasis/nerd-fonts/git/trees/master?recursive=1', function(response) {
		Ember.$.getJSON('', function(response) {
			//var response = data;
			var files = response.tree;
			//var data = [];
			var uid = 1;
			var i = 0;
			var filesLength = files.length;

			//for (var possible_font in files)
			for (; i < filesLength; i++) {
				var possible_font = files[i];
				//debugger;
				if (possible_font.type === "blob" && possible_font.path.includes("patched-fonts") && (possible_font.path.includes(".otf") || possible_font.path.includes(".ttf"))) {
					data.push({
						id: uid,
						type: 'font',
						attributes: {
							uri: possible_font.url,
							size: possible_font.size,
							name: possible_font.path.substring(possible_font.path.lastIndexOf("/") + 1, possible_font.path.length)
						}
					});
					uid++;
				}
			}
			var data = [{
				id: 1,
				type: 'font',
				attributes: {
					uri: 'asdf',
					name: 'asdf name',
					size: 999
				},
				relationships: {}
			}, {
				id: 2,
				type: 'font',
				attributes: {
					uri: 'asdf',
					name: 'asdf name',
					size: 999
				},
				relationships: {}
			}];
			//console.log(data);
			_this.store.push({
				data: data
			});
			/*return Ember.RSVP.hash({
				release: Ember.$.getJSON('https://api.github.com/repos/ryanoasis/nerd-fonts/releases/latest'),
				fonts: [1,2,3] //data
			});*/
		}).then(function(d) {
			//return 'hi';
			/*return Ember.RSVP.hash({
				release: Ember.$.getJSON('https://api.github.com/repos/ryanoasis/nerd-fonts/releases/latest'),
				//fonts: data
				fonts: [1, 2, 3]
			});*/
		});

		//debugger;
		//console.log(this);

		//return "test data from ember index route";
		/*return Ember.RSVP.hash({
			release: Ember.$.getJSON('https://api.github.com/repos/ryanoasis/nerd-fonts/releases/latest'),
			//fonts: [1,2,3]
			fonts: this.store.findAll('font')
			//fonts: Ember.$.getJSON('https://api.github.com/repos/ryanoasis/nerd-fonts/git/trees/master?recursive=1')
		});*/
		/*return Ember.RSVP.hash({
			release: Ember.$.getJSON('https://api.github.com/repos/ryanoasis/nerd-fonts/releases/latest'),
			fonts: data
		});*/
		return this.store.findAll('font');
	}
});
