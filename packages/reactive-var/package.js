Package.describe({
  summary: "Reactive variable",
  version: '1.0.11-rc.0'
});

Package.onUse(function (api) {
  api.export('ReactiveVar');

  api.use('tracker');

  api.addFiles('reactive-var.js');
});
