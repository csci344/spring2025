from models import Post, db

# get all of the posts:
posts = Post.query.all()

# print posts:
print(posts)

# use loop to output specific post attributes: 
for post in posts:
    print(
        post.id, '|', 
        post.image_url, '|', 
        post.user.username, '| # comments:', 
        len(post.comments)
    )

# limit the # of posts:
posts = Post.query.limit(10).all()

# filter the posts (simple):
posts = Post.query.filter_by(user_id=5).all()

# filter the posts (by attribute of a joined table):
posts = Post.query.filter(Post.user.has(username='chad_marks')).all()

# get single post based on primary key (id column):
post = Post.query.get(5)

print(post)

# get the user of a post (from the users table)
print(post.user)

# get all of the comments on a post (from the comments table)
print(post.comments)