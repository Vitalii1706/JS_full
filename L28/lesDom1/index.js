export const shmoment = (date) => {
  let newDate = new Date(date);

  const calculator = {
    add(period, value) {
      const result = {
        milliseconds: (value) =>
          newDate.setMilliseconds(newDate.getMilliseconds() + value),
        seconds: (value) => newDate.setSeconds(newDate.getSeconds() + value),
        minutes: (value) => newDate.setMinutes(newDate.getMinutes() + value),
        hours: (value) => newDate.setHours(newDate.getHours() + value),
        days: (value) => newDate.setDate(newDate.getDate() + value),
        months: (value) => newDate.setMonth(newDate.getMonth() + value),
        years: (value) => newDate.setFullYear(newDate.getFullYear() + value),
      };
      newDate = new Date(result[period](value));
      return calculator;
    },

    subtract(period, value) {
      const result = {
        milliseconds: (value) =>
          newDate.setMilliseconds(newDate.getMilliseconds() - value),
        seconds: (value) => newDate.setSeconds(newDate.getSeconds() - value),
        minutes: (value) => newDate.setMinutes(newDate.getMinutes() - value),
        hours: (value) => newDate.setHours(newDate.getHours() - value),
        days: (value) => newDate.setDate(newDate.getDate() - value),
        months: (value) => newDate.setMonth(newDate.getMonth() - value),
        years: (value) => newDate.setFullYear(newDate.getFullYear() - value),
      };
      newDate = new Date(result[period](value));
      return calculator;
    },

    result() {
      return newDate;
    },
  };
  return calculator;
};
