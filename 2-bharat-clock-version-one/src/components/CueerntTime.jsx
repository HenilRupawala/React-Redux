function CurrentTime() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return <p>This is the current time: {day}/{month}/{year} - {date.toLocaleTimeString()}</p>;
}

export default CurrentTime;
