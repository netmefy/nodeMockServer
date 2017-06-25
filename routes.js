module.exports = function(app){
    var isps = require('./controllers/isp');
    app.get('/isp/login/:id/:pass', isps.logIn);
	app.get('/isp/rate/:supportNumber/:rate', isps.rate);
    app.post('/isp/likesFromId', isps.addLikesFromId);
}