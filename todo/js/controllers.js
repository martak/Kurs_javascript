function InputCtrl(inputView,store,http) {
var _this = this;
this.http = http;
this.store = store;

	inputView.on('clickButton', function(element) {
		store.add({
			'id': store.all, 
			'value': element, 
			'status': 'inactive'
		}); 
		store.save;			
	});

	inputView.on('clickButtonSave', function(){
			_this.save();
	});
};
	
InputCtrl.prototype.save = function () {

    var callback = function (err, response) {
        if (err) {
            throw err; //request error, do something
        }
        console.log(response); //object with the server data;
    };

    this.http.request('/api/todos', 'POST', JSON.stringify(this.store.data), callback);
};
	
function ListCtrl(listView,store,http) {	
    var _this = this;
	this.store = store;
	this.http = http;
	
	_this.load();
	
	store.on('add', function(element){
    listView.add(element);
    });

    listView.on('active', function(element){
    store.update(element,'active');
	_this.update();
    });

    listView.on('inactive', function(element){
    store.update(element,'inactive');
	_this.update();
    });

};

ListCtrl.prototype.load = function () {
var _this = this;

    var requestData = function (data){
        for(var i=0; i<data.length; i++) {
            _this.store.add({
                'id': data[i].id,
                'value': data[i].value,
                'status': data[i].status
            });
        }
    };

	var callback = function (err, response) {
        if (err) {
            throw err; //request error, do something
        }
        console.log(response); //object with the server data;
    };
	
    this.http.request('/api/todos', 'GET', requestData, callback);
};

ListCtrl.prototype.update = function () {

    var callback = function (err, response) {
        if (err) {
            throw err; //request error, do something
        }
        console.log(response); //object with the server data;
    };

    this.http.request('/api/todos', 'POST', JSON.stringify(this.store.data), callback);

};


function FooterCtrl(footerView,store) {

    store.on('addAll', function(element){
    footerView.addAll(element);
    });

    store.on('updateAll', function(element){
    footerView.updateAll(element);
    });

};