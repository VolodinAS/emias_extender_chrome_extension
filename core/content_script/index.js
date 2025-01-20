let GLOBAL_TIMER = 0;
let STORAGE = new ChromeLocalStorage(true);

STORAGE._set("test_key", "test_value");
let test_key = STORAGE._get("test_key");
console.log("test_key:", test_key)

$(document).ready(function (){
	console.log('INIT CONTENT SCRIPT SUCCESS!');
	initGlobalTimer();
})

function initGlobalTimer()
{
	GLOBAL_TIMER = setInterval(function(){
		const currentPlace = getCurrentPlace();
		setCurrentPlace(currentPlace);
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

function setCurrentPlace(currentPlace)
{
	if (!currentPlace) return;
	// chrome.storage.local.set({ key: value }).then(() => {
		// console.log('currentPlace:', currentPlace);
	// });
	STORAGE._set("currentPlace", currentPlace);
}
