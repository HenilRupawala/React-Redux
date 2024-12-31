const Container = ({ children }) => {
  return (
    <div className="card mx-auto mt-3" style={{ width: "50rem" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
