const ErrorMessage = ({ items }) => {
  return (
    <>{items.length === 0 && <h3>There is nothing else to do anymore.</h3>}</>
  );
};

export default ErrorMessage;
