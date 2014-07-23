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

Package.on_test(function (api) {
  api.use('jwerty');

  api.add_files('tests.js', ['client']);
});
