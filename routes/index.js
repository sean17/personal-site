var fs		= require('fs'),
	path	= require('path')
	;


module.exports = 
{
	blog: function(req, res, next)
	{
		fs.readFile(path.join(__dirname, '../views/blog/list.js'),'utf8', function(err, file)
		{
			if(err)
			{
				console.log(err);
				res.end();
				return next();				
			}

			if(file)
			{
				res.render('blog',
				{
					title: 'blog',
					list: JSON.stringify(file)
				});
			}
		});
	},
	experiments: function(req, res, next)
	{
		fs.readdir(path.join(__dirname, '../views/experiments'), function(err, files)
		{
			if(err)
				console.log(err);
			if(files)
			{
				res.render('experiments',
				{
					title: 'experiments',
					list: JSON.stringify(files)
				});
			}
		});
	}
};