// Adapted from https://www.npmjs.com/package/http-queue
class HttpQueue {

	constructor(wait) {
		this.wait = wait;
	}

	parseUrl(options) {
		try {	
			let urlObject = new URL(options.url);
			options.protocol = urlObject.protocol || 'http:';
			options.host = urlObject.host || 'localhost';
			options.hostname = urlObject.hostname || 'localhost';
			options.path = (urlObject.pathname + urlObject.search) || '/';
			options.port = urlObject.port || (options.protocol === 'https:' ? 443 : 80);
			return options;
		} catch(err) {
			return options;
		}
	}

	getProtocolObject(options) {
		if (typeof options === 'object' && options.protocol) {
			return options.protocol === 'https:' ? https : http;
		} else {
			return https;
		}
	}

	newRequest(options = {}, callback = null, error = null, wait = null) {
		if (typeof options === 'string') {
			options = { url: options };
		}
		if (typeof options === 'object' && options.url) {
			this.parseUrl(options);
		}
		wait = wait || this.wait;
		delay(wait, () => {
			return this.makeRequest(options,callback,error);
		});
	}

	getBody(options) {
		let noBodyMethods = ['GET', 'DELETE', 'OPTIONS', 'HEAD'];
		if (
			typeof options === 'object' &&
			noBodyMethods.indexOf(options.method) === -1 &&
			options.body
		) {
			return options.body;
		} else {
			return null;
		}
	}
	
	makeRequest(options, callback = null, error = null) {
		let body = this.getBody(options);
		fetch(options.url).then(function(data) {
			if (typeof callback == 'function') {
				callback(data);
			} else {
				console.log(data);
			}
			return data;
		}).catch(function(err) {
			if (typeof callback == 'function') {
				callback(err);
			} else {
				console.log(err);
			}
			return err;
		});
	}

	getInterval() {
		return this.wait;
	}

	setInterval(x) {
		this.wait = x;
	}

};

var delay = (function() {
  var queue = [];

  function processQueue() {
	if (queue.length > 0) {
	  setTimeout(function (cc) {
		queue.shift().cb(cc);
		processQueue();
	  }, queue[0].delay);
	}
  }

  return function delayed(delay, cb) {
	queue.push({ delay: delay, cb: cb });
	if (queue.length === 1) {
	  processQueue();
	}
  };
}());