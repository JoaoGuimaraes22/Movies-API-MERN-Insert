const axios = require("axios");

const fetchData = async (url) => {
  const response = await axios.get(url);
  const data = await response.data;
  const formatedData = await data.results;
  return formatedData;
};

const twoPageFetch = async () => {
  const resultsOne = await fetchData(
    "https://api.themoviedb.org/3/discover/movie?api_key=5b4370c03491f16a07e646d7956677b7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
  );
  const resultsTwo = await fetchData(
    "https://api.themoviedb.org/3/discover/movie?api_key=5b4370c03491f16a07e646d7956677b7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2"
  );

  const results = [...resultsOne, ...resultsTwo];

  console.log(results.length);
};

twoPageFetch();
