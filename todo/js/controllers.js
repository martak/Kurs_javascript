function InputCtrl(inputView,store) {
    	inputView.on('clickButton', function(element) {
		store.add(element);
		view.clean();
    });
};

function ListCtrl(listView,store,http) {

	var callback = function (err, response) {
		if (err) {
			throw err; //request error, do something
		}

		console.log(response); //object with the server data;
	};
					
	UAM.Http.request('/api/todos', 'GET', null, callback);

    store.on('add', function(element){
    listView.add(element);
    });

    listView.on('active', function(element){
    store.update(element,'active');
    });

    listView.on('inactive', function(element){
    store.update(element,'inactive');
    });

};


function FooterCtrl(footerView,store) {

    store.on('addAll', function(element){
    footerView.addAll(element);
    });

    store.on('updateAll', function(element){
    footerView.updateAll(element);
    })

};