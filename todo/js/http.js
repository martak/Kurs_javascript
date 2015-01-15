UAM.Http = {
	request: function (url, method, requestData, callback) {
		var httpRequest = new XMLHttpRequest();

		function onload(e) {
			console.log('Loading...');
		}
		
		if (method === 'POST') {
			httpRequest.open(method,url,true);
			httpRequest.onreadystatechange = function () {
				if (httpRequest.readyState !== 4) return;
				if (httpRequest.status !== 200) {
					callback && callback(status);
					console.log(callback);
				}
			};
			httpRequest.onload = onload;
			httpRequest.responseType="json";
			httpRequest.setRequestHeader('Content-Type', 'application/json');
			console.log("Send: " + requestData);
			httpRequest.send(requestData);
		}
		
		if (method === 'GET') {
			httpRequest.open(method,url,true);
			httpRequest.onreadystatechange = function () {
				if (httpRequest.readyState !== 4) return;
				if (httpRequest.status == 200) {
					var data = JSON.parse(httpRequest.responseText);
					requestData && requestData(data);
				} else {
					callback && callback(status);
					console.log(callback);
				}
			};
			httpRequest.onload = onload;
			httpRequest.send();
		}
	}
};
