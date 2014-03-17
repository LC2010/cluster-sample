// 主进程引入
var Master = require('./lib/master');

// 创建主进程
var master = Master.create();

// 创建多个Worker
var http1 = master.register('http1', './worker.js', {
  port: parseInt(process.argv[2] || 8080),
  children: 4
});
var http2 = master.register('http2', './worker.js', {
  port: parseInt(process.argv[2] || 8081)
});

// 运行Master对Worker进行管理
master.run(function() {
  console.log('server bound');
});