/**
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
	 * @chainable
	 * @param {User|Integer|String|null} user Ein `User`-Objekt, die `User-ID` oder der `Nickname`. Ist der Wert `undefined` oder `null`, werden alle Nutzer, die online sind, genutzt.
	*/
	this.open = function open(user) {
		var appContent = AppContent.popupContent(new HTMLFile('index.html'), 100);
		user.sendAppContent(appContent);
		
		return this;
	};
	
	/**
	 * @method close
	 * @chainable
	 * @param {User|Integer|String|null} user Ein `User`-Objekt, die `User-ID` oder der `Nickname`. Ist der Wert `undefined` oder `null`, werden alle Nutzer, die online sind, genutzt.
	*/
	this.close = function close(user) {
		
		return this;
	};
	
	/**
	 * @method setSize
	 * @chainable
	 * @param {Integer} width Die Breite des Popups
	 * @param {Integer} height Die Höhe des Popups
	*/
	this.setSize = function setSize(width, height) {
		return this;
	};
	
	this.constructor.apply(this, arguments);
};
