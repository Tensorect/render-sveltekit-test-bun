export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ByKg6gtK.js","app":"_app/immutable/entry/app.Djn9i6Sv.js","imports":["_app/immutable/entry/start.ByKg6gtK.js","_app/immutable/chunks/entry.I640caJ-.js","_app/immutable/chunks/runtime.BDwWgFjG.js","_app/immutable/entry/app.Djn9i6Sv.js","_app/immutable/chunks/runtime.BDwWgFjG.js","_app/immutable/chunks/render.CPcpR9lX.js","_app/immutable/chunks/disclose-version.D3LXEoUG.js","_app/immutable/chunks/index-client.DhNDN3eX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
