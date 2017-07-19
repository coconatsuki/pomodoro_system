function Settings() {
  this.work_minutes = 25;
  this.break_minutes = 5;
}

Settings.prototype = {
  add_work_minutes : function() {
    if(this.work_minutes < 60) {
      this.work_minutes += 1;
    }
    this.updateTimer();
  },
  remove_work_minutes : function() {
    if(this.work_minutes > 0)  {
      this.work_minutes -= 1;
    }
    this.updateTimer();
  },
  add_break_minutes : function() {
    if(this.break_minutes < 60) {
      this.break_minutes += 1;
    }
    this.updateTimer();
  },
  remove_break_minutes : function() {
    if(this.break_minutes > 0)  {
      this.break_minutes -= 1;
    }
    this.updateTimer();
  },
  updateTimer : function() {
    $('#work_minutes').text(this.work_minutes);
    $('#break_minutes').text(this.break_minutes);
  },
};
