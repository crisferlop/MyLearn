/**
A course have:
    Name
    Minimun score
    Apointment Time (Office hours of teacher)
    TeacherName
    State (Current state of course)

*/

function Course(Name, MinimunScore, AppointmentTime, TeacherName, State) {
    this.Name = Name;
    this.MinimunScore = MinimunScore;
    this.AppointmentTime = AppointmentTime;
    this.TeacherName = TeacherName;
    this.State = State;
    this.BatchList = new Array();
    this.CourseBeginDate = new Date();
    this.CourseEndDate = new Date();
    this.addBatch = function (BatchElement) {
        this.BatchList.push(BatchElement);
    }
    this.removeBatch = function (index) {
        this.BatchList.splice(index, 1);
    }
}