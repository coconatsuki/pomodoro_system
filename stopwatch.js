// setTimeout(function, milliseconds, param1, param2, ...)

// setInterval()

// clearInterval()

function StopWatch(settings) {
  // this.minuteField =
  // this.secondField =
  this.settings = settings;
  this.minutes = settings.work_minutes;
  this.seconds = 0;
  this.work_mode = true;
}

StopWatch.prototype = {
  removeOneSecond: function() {
    this.seconds -= 1;
    if(this.seconds < 0) {
      this.minutes -= 1;
      this.seconds = 59;
    }
    if(this.minutes < 0) {
      this.pause();
      if(this.work_mode) {
        this.minutes = this.settings.break_minutes;
        this.playSound('Ring01.wav');
      }
      else {
        this.minutes = this.settings.work_minutes;
        this.playSound('Ring02.wav');
      }
      this.work_mode = !this.work_mode;
      this.seconds = 0;
      this.start();
    }
    this.updateTimer();
  },
  reset: function() {
    this.pause();
    this.minutes = this.settings.work_minutes;
    this.seconds = 0;
    this.updateTimer();
    this.work_mode = true;
  },
  timerNotRunning: function() {
    return this.interval === undefined || this.interval === null;
  },
  start: function() {
    if(this.timerNotRunning()) {
      this.interval = setInterval(this.removeOneSecond.bind(this), 1000);
    }
  },
  pause: function() {
    clearInterval(this.interval);
    this.interval = null;
  },
  updateTimer : function() {
    var minutesToPrint = this.add_zero(this.minutes);
    var secondsToPrint = this.add_zero(this.seconds);
    $('#minutes').text(minutesToPrint);
    $('#seconds').text(secondsToPrint);
    var titleLetter = "Break";
    var timeColor = $('.black_board').find('span');
    if(this.work_mode) {
      titleLetter = "Work";
      timeColor.removeClass('pink');
      timeColor.addClass('green');
    } else {
      timeColor.removeClass('green');
      timeColor.addClass('pink');
    }
    document.title =  minutesToPrint + " : " + secondsToPrint + " / " + titleLetter;
  },
  add_zero : function(num) {
    if(num < 10) {num = "0"+num; }
    return num;
  },

  playSound : function(audioFile) {
    $('#audio').html('');
    $('#audio').append("<audio autoplay src='sounds/" + audioFile + "'></audio>");
  },

};
