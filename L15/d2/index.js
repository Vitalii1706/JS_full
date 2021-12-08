/*
const createLoggers = () => {
  let memory = [];
  let memorySort = memory.sort((a, b) => b.dateTime - a.dateTime);
  let data = new Date();
  const WARN = 'warn';
  const ERROR = 'error';
  const LOG = 'log';

  function warn(text) {
    obj = { message: text, dataTime: data, type: WARN };
    return memorySort.unshift(obj);
  }

  function error(text) {
    obj = { message: text, dataTime: data, type: ERROR };
    return memorySort.unshift(obj);
  }

  function log(text) {
    obj = { message: text, dataTime: data, type: LOG };
    return memorySort.unshift(obj);
  }

  function getRecords(textType) {
    if (textType === 'warn') {
      return memorySort.filter((obj) => obj.type === WARN);
    }
    if (textType === 'error') {
      return memorySort.filter((obj) => obj.type === ERROR);
    }
    if (textType === 'log') {
      return memorySort.filter((obj) => obj.type === LOG);
    }
    return memorySort;
  }
  
  const logger = {
    warn,
    error,
    log,
    getRecords,
  };
  return logger;
}; 

const logger = createLogger();
console.log(logger.getRecords());

logger.log('Use loget in');
logger.warn('Use try');
logger.error('Use ');
logger.warn('Try');
logger.warn('Use   try');
console.log(logger.getRecords());
console.log(logger.getRecords('warn'));
console.log(logger.getRecords('log'));
*/

export const createLogger = () => {
  let text = [];
  let memory = text.sort((a, b) => b.dateTime - a.dateTime);
  const warn = (textMessage) =>
    memory.unshift({
      message: textMessage,
      dateTime: new Date(),
      type: 'warn',
    });

  const error = (textMessage) =>
    memory.unshift({
      message: textMessage,
      dateTime: new Date(),
      type: 'error',
    });

  const log = (textMessage) =>
    memory.unshift({ message: textMessage, dateTime: new Date(), type: 'log' });

  const getRecords = (textMessage) => {
    if (textMessage === 'warn')
      return memory.filter((obj) => obj.type === 'warn');
    if (textMessage === 'error')
      return memory.filter((obj) => obj.type === 'error');
    if (textMessage === 'log')
      return memory.filter((obj) => obj.type === 'log');
    return memory;
  };

  const logger = {
    warn,
    error,
    log,
    getRecords,
  };
  return logger;
};

const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');
logger.getRecords();
logger.getRecords('log');
logger.getRecords('error');
logger.getRecords('warn');
