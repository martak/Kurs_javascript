UAM.InputView = function (element) {
    UAM.EventEmitter.call(this);
    this.element  = element;
    var _this = this;

    this.element.querySelector('.button').addEventListener('click',function(){
        var newTask =  document.getElementById('newTask').value;
        _this.emit('clickButton', newTask);
    });
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);


UAM.ListView = function (element) {
    UAM.EventEmitter.call(this);
    var _this = this;
	
    document.querySelector('ul').addEventListener('click',function(event){
            if ( event.target.classList.contains('inactive')) {
                event.target.classList.remove('inactive');
                event.target.classList.add('active');
                _this.emit('active', event.target.id);
            }
            else {
                event.target.classList.remove('active');
                event.target.classList.add('inactive');
                _this.emit('inactive', event.target.id);
            }
    });
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);


UAM.ListView.prototype.add = function (item) {
    if(item.length > 0) {
        var listElement = document.createElement('li');
        var elements = document.getElementsByTagName('ul')[0];
        listElement.innerHTML = item;
        var list = elements.appendChild(listElement);
        list.classList.add('inactive');
    }
};

UAM.FooterView = function (element) {
    UAM.EventEmitter.call(this);
    this.element = element;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.addAll = function (item) {
    var all = this.element.querySelector('.all');
    all.innerHTML = item;
};

UAM.FooterView.prototype.updateAll = function (item) {
    var active = this.element.querySelector('.active');
    active.innerHTML = item;
};