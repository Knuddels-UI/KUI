/**
 * @module Component
 * @class Overlay
 * @extends Component
 * @constructor
*/

exports.Overlay = function Overlay() {
	this.constructor = function constructor() {
		KnuddelsServer.getDefaultLogger().info("new Overlay");
	};
	
	/**
	 * @method show
	 * @param {User|Integer|String|null} user Ein `User`-Objekt, die `User-ID` oder der `Nickname`. Ist der Wert `undefined` oder `null`, werden alle Nutzer, die online sind, genutzt.
	*/
	this.show = function show(user) {
		var appContent = AppContent.overlayContent(new HTMLFile('index.html'), 100);
		user.sendAppContent(appContent);
	};
	
	/**
	 * @method hide
	 * @param {User|Integer|String|null} user Ein `User`-Objekt, die `User-ID` oder der `Nickname`. Ist der Wert `undefined` oder `null`, werden alle Nutzer, die online sind, genutzt.
	*/
	this.hide = function hide(user) {
		
	};
	
	this.constructor.apply(this, arguments);
};
