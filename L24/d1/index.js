/*

const getDiff = (startDate, endDate) => {
  const differenceSec = Math.abs(endDate - startDate) / 1000;
  const days = Math.floor(differenceSec / (60 * 60 * 24));
  const hours = Math.floor((differenceSec % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor(
    ((differenceSec % (60 * 60 * 24)) % (60 * 60)) / 60
  );
  const seconds = ((differenceSec % (60 * 60 * 24)) % (60 * 60)) % 60;
  const result = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  console.log(result);
  return result;
};
*/
// export { getDiff };

const getDiff = (startDate, endDate) => {
  const start = new Date(startDate).getTime();
  console.log(start);
  const end = new Date(endDate).getTime();
  const diff = Math.abs(start - end);
  const oneDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / oneDay);
  const oneHour = 1000 * 60 * 60;
  const hours = Math.floor((diff - days * oneDay) / oneHour);
  const oneMinute = 1000 * 60;
  const minutes = Math.floor(
    (diff - days * oneDay - hours * oneHour) / oneMinute
  );
  const seconds = Math.floor(
    (diff - days * oneDay - hours * oneHour - minutes * oneMinute) / 1000
  );
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(
  getDiff(new Date(2021, 0, 1, 0, 0, 50), new Date(1970, 0, 5, 5, 40))
); /// 18623d 19h 20m 50s
