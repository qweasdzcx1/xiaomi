var http = require("http")
var url = require("url")
var fs = require("fs")
var path = require("path")
var qs = require("querystring")
var mime = require("./mime.js")

http.createServer(function(req, res) {
	var pname = url.parse(req.url).pathname
	console.log("url:" + pname)
		//判断请求方式
	if(req.method == "GET") {
		var q = url.parse(req.url, true).query
		console.log(q)

	} else if(req.method == "POST") {
		//累加数据
		var post = ''
		req.on("data", function(d) {
			post += d
		})
		req.on("end", function() {
			var pd = qs.parse(post)
			console.log(pd)
		})
	}
	//文件读取返回 
	if(pname == "/" || pname == "/index.html") {
resData("./index.html",res)
	} else {
resData("."+pname,res);
	}




}).listen(8124)
	console.log("困困困困困")
	
	//读取文件
	function resData(pat, res) {
		fs.exists(pat, function(e) {
			if(e) {
				//读取文件并返回 
				var ext = path.extname(pat).slice(1)
				var ct = mime.types[ext]
					//响应头
				res.writeHead(200, {
					"Content-Type": ct + ";charset=utf-8","Access-Control-Allow-Origin":"*"
				})
				fs.readFile(pat, function(err, data) {
					if(err) {
						console.error(err)

					} else {
						res.write(data)
						res.end()

					}
				})

			} else {
				//不存在
				res.end("文件不存在")
			}
		})
	}

