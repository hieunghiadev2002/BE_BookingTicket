const response = (status, message, data = null) => {
  return {
    status: status,
    message: message,
    data: data,
  };
};
module.exports = response;
