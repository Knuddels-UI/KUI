let exports = exports || {};

const import = function import(name) {
	if(typeof(exports[name]) != 'undefined') {
		return exports[name];
	}
	
	throw name + ' class not exists!';
};

(new function Autoloader() {
	const PACKAGE = 'com.knuddels.ui';
	
	this.constructor = function constructor() {
		this.boot('shared/' + PACKAGE + '/');
	};
	
	this.boot = function boot(path) {
		KnuddelsServer.listFiles('/' + path).forEach(function(file) {
			if(/\/index\.js$/.test(file)) {
				return;
			}

			if(file.indexOf('.js') <= -1) {
				this.boot(file);
				return;
			}
			
			require(file);
		}.bind(this));
	};
	
	this.constructor();
}());
