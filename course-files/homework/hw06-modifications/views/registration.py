from flask import request, render_template
from models import User, db
from utilities import account_utilities


# TODO: Write tests for this:
def register():
    if request.method == "POST":
        messages = []
        # print(request.form)
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        email = request.form.get("email")
        username = request.form.get("username")
        password = request.form.get("password")
        password_again = request.form.get("password_again")

        # check that email valid:
        if not account_utilities.email_check_is_valid(email):
            messages.append(
                "Please double-check your email to ensure it is valid."
            )

        # check that username at least 5 chars:
        if len(username) < 5:
            messages.append(
                "Your username must be at least 5 characters long."
            )

        # check that password is sufficiently complex:
        if not account_utilities.password_check_is_valid(password):
            messages.append(
                "Password must be at least 8 characters and contain 1 symbol, 1 number, 1 uppercase letter, and 1 lowercase letter"
            )

        # check that email not in DB:
        user = User.query.filter_by(email=email).first()
        if user is not None:
            messages.append(
                'The email "' + email + '" is already in the database'
            )

        # check that username not in DB:
        user = User.query.filter_by(username=username).first()
        if user is not None:
            messages.append(
                'The user "' + username + '" is already in the database'
            )

        # check that passwords match
        if password != password_again:
            messages.append("Passwords do not match")

        # create an account + email if all validation checks pass.
        if len(messages) == 0:
            user = User.create_account(
                first_name, last_name, username, email, password
            )
            return render_template("registration_email_sent.html", user=user)
        # otherwise, tell the user what they did wrong:
        else:
            print(messages)
            return render_template(
                "register.html", messages=messages, form=request.form
            )
    else:
        return render_template("register.html", title="Register", form={})


def registration_confirmed(id, hash):
    user = User.query.get(id)
    if user is None:
        return "Invalid verification link."

    if hash != user.get_unique_identifier():
        return "Invalid verification link."

    user.is_verified = True
    db.session.add(user)
    db.session.commit()

    # create some starter data for the new user:
    account_utilities.create_starter_data(user)
    return render_template("registration_confirmed.html", user=user)


def send_password_reset_link():
    if request.method == "POST":
        messages = []
        email = request.form.get("email")
        user = User.query.filter_by(email=email).first()
        if user is None:
            messages.append("The email (" + email + ") is not in our system.")
            return render_template(
                "reset_password.html", messages=messages, form=request.form
            )
        else:
            account_utilities.send_password_reset_email(user)
            return render_template("reset_password_email_sent.html", user=user)

    else:
        return render_template("reset_password.html", form={})


def reset_password(id, hash):
    # validate link:
    user = User.query.get(id)
    if user is None:
        return "Invalid verification link."

    if hash != user.get_unique_identifier():
        return "Invalid verification link."

    if request.method == "GET":
        return render_template(
            "reset_password_confirm.html", user=user, hash=hash
        )
    elif request.method == "POST":
        password = request.form.get("password")
        password_again = request.form.get("password_again")
        messages = []
        # check that password is sufficiently complex:
        if not account_utilities.password_check_is_valid(password):
            messages.append(
                "Password must be at least 8 characters and contain 1 symbol, 1 number, 1 uppercase letter, and 1 lowercase letter"
            )

        # check that passwords match
        if password != password_again:
            messages.append("Passwords do not match")
        if len(messages) > 0:
            return render_template(
                "reset_password_confirm.html",
                messages=messages,
                form=request.form,
                user=user,
                hash=hash,
            )
        else:
            user.reset_password(password)
            return render_template(
                "reset_password_confirmed.html",
                messages=messages,
                form=request.form,
                user=user,
                hash=hash,
            )


def initialize_routes(app):
    app.add_url_rule("/register", view_func=register, methods=["GET", "POST"])
    app.add_url_rule(
        "/activate/<int:id>/<hash>",
        view_func=registration_confirmed,
        methods=["GET"],
    )
    app.add_url_rule(
        "/reset-password",
        view_func=send_password_reset_link,
        methods=["GET", "POST"],
    )
    app.add_url_rule(
        "/reset-password/<int:id>/<hash>",
        view_func=reset_password,
        methods=["GET", "POST"],
    )
