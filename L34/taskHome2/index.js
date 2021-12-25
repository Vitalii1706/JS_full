const commitUrl =
  "https://api.github.com/repos/USERID/REPOID/commits?per_page=100";

const getMostActiveDevs = () => {
  return fetch(commitUrl)
    .then((response) => response.json())
    .then((result) => console.log(result));
};

getMostActiveDevs();
