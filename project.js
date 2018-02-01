exports.viewProject = function(req, res) { 
var name = req.params.name;
res.render('project', {
	'projectName': name
	});
};