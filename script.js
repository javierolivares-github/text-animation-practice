// (5) - Reload page each 6s
const refreshPage = (timeoutPeriod) => {
  setTimeout(
    // this refresh the page
    'document.location.reload(true);',
    // this is the timeout period
    timeoutPeriod
  );
}

window.onload = refreshPage(6000);









