import { useEffect, useState } from "react";

let CurrentTime= () => {
  const [date, setDate] = useState(new Date());
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      console.log("clear")
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p>
      This is the current time: {day}/{month}/{year} -{" "}
      {date.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
