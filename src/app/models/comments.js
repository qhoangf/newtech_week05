
const comments = [];

class Comment {
  constructor(id, user, comments) {
    this.id = id;
    this.user = user;
    this.comment = comment;
  }

  static addComment(comment, user) {
    const id = comments.length + 1;
    const newComment = new Comment(comment, user);
    comments.push(newComment);
    return newComment;
  }


  static getAllComments() {
    return comments;
  }
}

module.exports = Comment;
