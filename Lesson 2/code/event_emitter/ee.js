(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
		if (!this.listeners[eventName]) this.listeners[eventName] = [];
		this.listeners[eventName].push({listener: listener, context: context});
	};

	
	EE.prototype.emit = function (eventName) {
		var arguments = Array.prototype.slice.call(arguments, 1);
		var listener = this.listeners[eventName];
		 
		for (var i = 0; i < listener.length; i++) {
			listener[i].listener.apply(listener[i].context, arguments);
		}
	};
	function removeListener(eventName, listener) {
	};

	var ee = new EE();
	
	ee.on('Wydarzenie', function (arg1, arg2) {
		console.log(arg1, arg2, this.key);
	}, { key: 'value' });
	
	ee.emit('Wydarzenie',1,2);
	
	/*var removeListener = ee.on('test', function (arg1, arg2) {
		console.log(arg1, arg2, this.key);
	}, { key: 'value' });*/

	//ee.emit('test', 1, 2); // 1, 2 value

	removeListener(); //removes my listener from the event emitter;

	//ee.emit('test'); //nothing will execute

	global.UAM.EventEmitter = EE;

}(window));
