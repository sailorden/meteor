Package.describe({
  summary: "Restrict which websites can frame your app",
  version: "1.0.12-rc.0"
});

Package.onUse(function (api) {
  api.imply(["browser-policy-common"], "server");
  api.use(["underscore", "browser-policy-common"], "server");
  api.addFiles("browser-policy-framing.js", "server");
});
