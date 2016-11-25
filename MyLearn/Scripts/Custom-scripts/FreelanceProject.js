function FreelanceProject(Name, Score, ContactName, State) {
    this.Name = Name;
    this.Score = Score;
    this.ContactName = ContactName;
    this.State = State;
    this.Technologies = new Array();
    this.addTechnology = function (TechnologyElement) {
        this.Technologies.push(TechnologyElement);
    }
    this.removeTechnology = function (index) {
        this.Technologies.splice(index, 1);
    }
}