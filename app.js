let stopInterval;
function ramadanCountDown() {
  let ramadanDate = new Date("2 mar 2025");
  let start = document.getElementById("start");
  let day = document.getElementById("days");
  let hour = document.getElementById("hours");
  let min = document.getElementById("mins");
  let sec = document.getElementById("secs");

  stopInterval = setInterval(function () {
    let date = new Date();
    let remain = ramadanDate - date;

    if (remain <= 0) {
      stopCountDown();
      start.innerText = "Ramadan has started";
      day.innerText = "00";
      hour.innerText = "00";
      min.innerText = "00";
      sec.innerText = "00";
      return;
    }

    let remainDay = Math.floor(remain / (1000 * 60 * 60 * 24));
    let remainHour = Math.floor(
      (remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let remainMin = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    let remainSec = Math.floor((remain % (1000 * 60)) / 1000);

    if (remainDay < 10) {
      day.innerText = `0${remainDay}`;
    } else {
      day.innerText = remainDay;
    }
    if (remainHour < 10) {
      hour.innerText = `0${remainHour}`;
    } else {
      hour.innerText = remainHour;
    }
    if (remainMin < 10) {
      min.innerText = `0${remainMin}`;
    } else {
      min.innerText = remainMin;
    }
    if (remainSec < 10) {
      sec.innerText = `0${remainSec}`;
    } else {
      sec.innerText = remainSec;
    }
  }, 1000);
}

function stopCountDown() {
  clearInterval(stopInterval);
}
ramadanCountDown();
