class ChromeLocalStorage {
	
	constructor(is_debug = false)
	{
		this.is_debug = is_debug
	}
	
	_set(key, value)
	{
		let storage = chrome.storage.local.set({ key: value });
		if (this.is_debug)
		{
			storage.then(() => {
				console.log(`Set: ${key} = ${value}`);
			})
		}
	}
	
	_get(key)
	{
		let response = null;
		let storage = chrome.storage.local.get([key]);
		
		storage.then((result) => {
			response = result.key
		});
		
		return response;
	}
	
	_get_or_set(key, value)
	{
	}
}