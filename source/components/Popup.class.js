/**
 * @module Component
 * @class Popup
 * @extends Component
 * @constructor
*/

exports.Popup = function Popup() {
	this.constructor = function constructor() {
		KnuddelsServer.getDefaultLogger().info("new pop");
	};
	
	/**
	 * @method open
	 * @param {User|Integer|String|null} user Ein `User`-Objekt, die `User-ID` oder der `Nickname`. Ist der Wert `undefined` oder `null`, werden alle Nutzer, die online sind, genutzt.
	*/
	this.open = function open(user) {
		var appContent = AppContent.popupContent(new HTMLFile('index.html'), 100);
		user.sendAppContent(appContent);
	};
	
	/**
	 * @method close
	 * @param {User|Integer|String|null} user Ein `User`-Objekt, die `User-ID` oder der `Nickname`. Ist der Wert `undefined` oder `null`, werden alle Nutzer, die online sind, genutzt.
	*/
	this.close = function close(user) {
		
	};
	
	this.constructor.apply(this, arguments);
};
