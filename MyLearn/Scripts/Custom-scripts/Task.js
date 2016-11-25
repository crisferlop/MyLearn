
/*Task is the abstraction of Course and Project when Contact is the name of teacher or company contact*/
function Task(Name, Contact, Status) {
    /*Name of task*/
    this.Name = Name;
    /*Name of contact, teacher for course task or contact company for freelance project*/
    this.Contact = Contact;
    /*The status of the task (doing or done)*/
    this.Status = Status;
}
