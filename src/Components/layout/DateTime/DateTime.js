import React, { useState, useEffect } from "react";
import moment from "moment";
const DateTime = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(moment().format("DD-MM-YYYY"));
  }, [date]);
  return <span>{date}</span>;
};
export default DateTime;
