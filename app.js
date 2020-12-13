const axios = require("axios");
const { get } = require("http");

const getExchangeRate = async (fromCurrency, toCurrency) => {
  const response = await axios
    .get(
      "http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1"
    )
    .then((response) => {
      let rate = response.data.rates;

      let euro = 1 / rate[fromCurrency];

      let exchangeRate = euro * rate[fromCurrency];
      return exchangeRate;
    });
};

const getCountries = async (toCurrency) => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${toCurrency}`)
  return response.data.map(country => {return country.name })


}

async function printFiles () {
    const files = await getCountries();
  
    for (const file of files) {
      console.log(contents);
    }
  }

printFiles()

