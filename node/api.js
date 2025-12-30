const request = require('request');

const options = {
  method: 'GET',
  url: 'https://livescore6.p.rapidapi.com/matches/v2/get-info',
  qs: {Category: 'football', Eid: '702093'},
  headers: {
    'X-RapidAPI-Key': '67cbc84fd9mshbf7441ea5072d24p17e7f3jsnb9aad38f8950',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});