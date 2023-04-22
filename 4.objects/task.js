function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  };
  
  Student.prototype.addMarks = function (...marks) {
    console.log(marks in this);
    if ("marks" in this) {
      console.log(marks);
      this.marks.push(...marks);
    }
  };
  
  Student.prototype.getAverage = function () {
    if ("marks" in this) {
      return this.marks.reduce((ac, v, i, arr) => ac + v / arr.length, 0);
    } else {
      return 0;
    }
  };
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  };
