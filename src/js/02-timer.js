import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let timeChronometer;

const startEvent = () => {
  // addchronometer();
  setInterval(addchronometer, 1000);
}

function addLeadingZero(num) {
  return num.toString().padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addchronometer() {
  let date = convertMs(timeChronometer);
  timeChronometer -= 1000;
  document.querySelector('[data-days]').innerHTML = addLeadingZero(date.days);
  document.querySelector('[data-hours]').innerHTML = addLeadingZero(date.hours);
  document.querySelector('[data-minutes]').innerHTML = addLeadingZero(date.minutes);
  document.querySelector('[data-seconds]').innerHTML = addLeadingZero(date.seconds);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      btn.disabled = false;
      timeChronometer = selectedDates[0] - new Date();
    }
    else
      window.alert("Please choose a date in the future");
  },
};
flatpickr('#datetime-picker', options);

const btn = document.querySelector('[data-start]');
btn.disabled = true;
btn.addEventListener('click', startEvent);

