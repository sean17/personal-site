function birthday()
{
	var date = new Date(),
		age
		;
	if(date.getMonth()<3 || (date.getMonth()==3 && date.getDate()<17))
	{
		age = (date.getFullYear()-1992);
	} else
	{
		age = (date.getFullYear()-1991)
	}
	return age;
}

$(function()
{
	$("#age").text(birthday() + ' year old');	
});
