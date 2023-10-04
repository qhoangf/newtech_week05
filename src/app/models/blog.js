const blogs = [];

class Blog {
  constructor(id,content,comments) {
    this.user = [];
    this.id = id;
    this.content = content;
    this.comments = [];
  }

  static addComment(blogId,user, comment) {
    const blog = blogs.find(blog => blog.id == blogId);
    if (blog) {
        blog.user.push(user);
        blog.comments.push(comment);
        return blog;
    } else {
        return null;
    }
  }

  static getAllBlogs() {
    return blogs;
  }

  static updateBlog(id, updatedContent) {
    const blogToUpdate = blogs.find(blog => blog.id == id);

    if (!blogToUpdate) {
        return null;
    }
    blogToUpdate.content = updatedContent;
    return blogToUpdate;
  }

  static getBlogById(id) {
    return blogs.find(blog => blog.id == id);
  }

  static createBlog(content) {
    const id = blogs.length + 1;
    const newBlog = new Blog(id, content);
    blogs.push(newBlog);
    return newBlog;
  }

  static deleteBlog(id) {
    const index = blogs.findIndex(blog => blog.id == id);
    if (index !== -1) {
      blogs.splice(index, 1);
      return true;
    }
    return false;
  }

  static editBlog(id, title, content) {
    const blog = blogs.find(blog => blog.id === id);
    if (blog) {
      blog.title = title;
      blog.content = content;
      return true;
    }
    return false;
  }
}

module.exports = Blog;
