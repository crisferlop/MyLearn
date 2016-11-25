function Commentary(Commentary, Date, Username, UserPhoto, AttachFile, Responses) {
    CommentaryResponse.call(this, Commentary, Date, Username, UserPhoto, AttachFile);
    this.Responses = Responses;
}