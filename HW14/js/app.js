function Student(name, email) {
  this._name = name;
  this._email = email;
  this._homeworkResults = [{}];
  this.getName = function () {
    return this._name;
  }
  this.getEmail = function () {
    return this._email;
  }
  this.getHomeworkResults = function () {
    return this._homeworkResults;
  }
  this.addHomeworkResult = function (topic, success) {
    this._homeworkResults[0].topic = topic;
    this._homeworkResults[0].success = success;
  }
}

