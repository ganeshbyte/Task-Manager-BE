const errorResponse = ({ status, message, errorCode, data }) => {
  return { status, message, errorCode, data };
};
