/**
 * @class Global Functions
*/
let exports = exports || {};

/**
 * Importiert eine UI-Componente, die dann genutzt werden kann. 
 *
 * @method import
 * @param {String} Name
 * @returns {Component} Component
 * @throws {ComponentNotExistsException}
 * @static
 * @example
 *     // Importiere die Popup-Componente
 *     const Popup = import('Popup');
 * @example
 *     // Importiere die HeaderBar-Componente
 *     const HeaderBar = import('HeaderBar');
 *     var test = new HeaderBar();
*/
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
