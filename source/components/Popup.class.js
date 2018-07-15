exports.Popup = function Popup() {
	this.constructor = function constructor() {
		KnuddelsServer.getDefaultLogger().info("new pop");
	};
	
	this.open = function open(user) {
		var appContent = AppContent.headerbarContent(new HTMLFile('index.html'), 100);
		user.sendAppContent(appContent);
	};
	
	this.constructor.apply(this, arguments);
};
