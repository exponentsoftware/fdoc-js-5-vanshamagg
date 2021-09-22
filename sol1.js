const { default: axios } = require('axios');

const API_URL = 'https://restcountries.com/v3/all';

axios.get(API_URL)
  .then(res => {

    const data = res.data;

    // 1
    const languages = new Set();
    data.forEach(c => {
      if (c.languages)
        Object.values(c.languages).forEach(l => languages.add(l));
    });

    console.log('--- TOTAL LANGUAGES --- ', languages.size);

    //  2


    //  3
    const largest10 = data
      .sort((a, b) => b.area - a.area)
      .slice(0, 10)
      .map(c => ({ country: c.name.common, area: c.area }));

    console.log('--- 10 LARGEST COUNTRIES --');
    console.log(largest10);

  });




