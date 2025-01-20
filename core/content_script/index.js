let GLOBAL_TIMER = 0;

$(document).ready(function (){
	console.log('INIT CONTENT SCRIPT SUCCESS!');
	initGlobalTimer();
})

function initGlobalTimer()
{
	GLOBAL_TIMER = setInterval(function(){
		const currentPlace = getCurrentPlace();
	}, 1000);
}

function getCurrentPlace()
{
	const headerPathDOM = $('div[name=headerPath]');
	if (!headerPathDOM) return;
	if (!headerPathDOM.length) return;
	const data = headerPathDOM.html();
	if (!data.length) return;
	return data
}