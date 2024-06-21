function getFormattedDate(value, type, inMS) {
  // jode type na dia thke tahle ovbe return hbe
  if (!type) return value;
  // jode milisecond a na dia thake thle ms a convert korbo
  if (!inMS) {
    value = value * 1000;
  }

  const date = new Date(value); // eta miliseconds take nai Date a convert korlo

  let options;
  // ei option tay ei 4 ta option a date dekhabe
  if (type == "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } 
  // ei option a ei dui category te Date a convert hbe 
  else type == "time";
  {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
}


export {getFormattedDate}