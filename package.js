Package.describe({
	summary: 'Awesome handling of keyboard events'
});

Package.on_use(function(api, where) {
	if (api.export) {
		api.export('jwerty', 'client');
	}
	api.add_files('lib/jwerty/jwerty.js');
	api.add_files('lib/export-jwerty.js');
});