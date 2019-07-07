
var student_array = ['Erica', 'Chris', 'Jack', 'Heather', 'Kit', 'Mary'];
console.log('The third student in the array is:', student_array[2]);
console.log('Full Student Array:', student_array);
console.log('There are ', student_array.length, 'students in the student_array')
student_array.push('Fred');
student_array.unshift('Nancy');
console.log('Full Student Array:', student_array);
console.log('There are ', student_array.length, 'students in the student_array')

var student = {};
student.firstName = 'June';
student.lastName = 'Osborne';
student.age = 22;
student.school = 'USC';
student.questionQueue = [];
student.hasQuestion = false;

student.greeting = function () {
  return "Hello, my name is " + this.firstName;
}

student.aboutMe = function () {
  return 'My full name is ' + this.firstName + ' ' + this.lastName + ' I am ' + this.age + ' years old and I am a student at ' + this.school;
}

student.askQuestion = function (question) {
  this.questionQueue.push(question);
  this.hasQuestion = true;
  return 'A question has been added to your queue';
}

student.answerQuestion = function () {
  if (this.hasQuestion) {
    var question = this.questionQueue.pop();
    if (this.questionQueue.length === 0) {
      this.hasQuestion = false;
    }
    return question;
  }

  return 'You have no questions in your queue';
}

console.log('Greet Test:', student.greeting());
console.log('AboutMe Test:', student.aboutMe());
console.log('Answer Question Test:', student.answerQuestion());
console.log('Ask Question Test:', student.askQuestion('What time is it?'));
console.log('Ask Question Test:', student.askQuestion('How are you?'));
console.log('Ask Question Test:', student.askQuestion('What are you doing?'));
console.log('Answer Question Test:', student.answerQuestion());
console.log('Answer Question Test:', student.answerQuestion());
console.log('Answer Question Test:', student.answerQuestion());
console.log('Answer Question Test:', student.answerQuestion());
