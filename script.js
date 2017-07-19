var settings = new Settings();
var stopWatch = new StopWatch(settings);
$('#start').on('click', function(event) {
  event.preventDefault();
  if(stopWatch.timerNotRunning()) {
    stopWatch.removeOneSecond.bind(stopWatch)();
    stopWatch.start.bind(stopWatch)();
  }
});
$('#pause').on('click', function(event) {
  stopWatch.pause.bind(stopWatch)();
});
$('#reset').on('click', stopWatch.reset.bind(stopWatch));
$('#work_up').on('click', settings.add_work_minutes.bind(settings));
$('#work_down').on('click', settings.remove_work_minutes.bind(settings));
$('#break_up').on('click', settings.add_break_minutes.bind(settings));
$('#break_down').on('click', settings.remove_break_minutes.bind(settings));

stopWatch.updateTimer();
