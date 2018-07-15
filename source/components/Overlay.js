/**
 * @module Overlay
 * @constructor
*/

exports.Overlay = function Overlay() {
	this.constructor = function constructor() {
		KnuddelsServer.getDefaultLogger().info("new Overlay");
	};
	
	/**
	 * @method open
	 * @param {User|Integer|String} user The `User`-Object, `User-ID` or the `Nickname`
	*/
	this.open = function open(user) {
		var appContent = AppContent.headerbarContent(new HTMLFile('index.html'), 100);
		user.sendAppContent(appContent);
	};
	
	this.constructor.apply(this, arguments);
};
