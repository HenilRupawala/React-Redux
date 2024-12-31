const WelcomeMessage = ({onGetPostClicked}) => {
  return (
    <center className="welcome-message">
      <h1>There is no posts.</h1>
      <button type="button" className="btn btn-primary" onClick={onGetPostClicked}>
        Get posts from server
      </button>
    </center>
  );
};

export default WelcomeMessage;