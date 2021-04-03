module.exports = {



  format_time: (date) => {
    return date.toLocaleTimeString();
  },


  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCMFullYear() + 5;

    let newDate = month + "/" + day + "/" + year;
    return newDate;

  }
  

};
