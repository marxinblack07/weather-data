const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Taipei&days=10&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa2f9119efmsh647d5171b2cfb9ep1b4b2ajsn7f20a46ddea0',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const fetchData = async (url, options) =>
{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const data = fetchData(url, options);

