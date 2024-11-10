from fastapi import FastAPI, Request
from db import fake_db

# For Templating:
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={"user": fake_db.get("users")[0]},
    )


@app.get("/test")
async def test():
    return {"message": "Hello World"}


@app.get("/api/posts")
async def get_posts():
    return fake_db.get("posts")


@app.get("/api/posts/{post_id}")
async def get_post_by_id(post_id: int):
    posts = fake_db.get("posts")
    for post in posts:
        if post.get("id") == post_id:
            return post
    return None


@app.get("/api/users")
async def get_users(limit: int = 10, username: str = None):
    users = fake_db.get("users")

    if username:

        # returns true if there's a match, and false otherwise:
        def filter_by_user(user):
            current_username = user.get("username")
            return current_username.find(username.lower()) != -1

        # filter the users array based on the "filter_by_user" filter
        users = list(filter(filter_by_user, users))

    if limit:
        users = users[0:limit]  # slice to requested length

    return users


@app.get("/api/users/{user_id}")
async def get_user_by_id(user_id: int):
    users = fake_db.get("users")
    for user in users:
        if user.get("id") == user_id:
            return user
    return None
