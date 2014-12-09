UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.all = 0;
	this.active = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {
	this.data.push(data);
	this.all++;
	this.emit('add',data);
	this.emit('addAll',this.all);
};

UAM.Store.prototype.update = function (id,data) {
	if(data == 'active'){
		this.active++;
	}
	else{
		this.active--;
	}
	this.emit('updateAll',this.active);
};