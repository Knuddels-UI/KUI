/**
 * @module Component
 * @class Popup
 * @constructor
*/

exports.Popup = function Popup() {
	this.constructor = function constructor() {
		KnuddelsServer.getDefaultLogger().info("new pop");
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
