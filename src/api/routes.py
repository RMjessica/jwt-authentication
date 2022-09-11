"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity, JWTManager
import json, bcrypt

api = Blueprint('api', __name__)

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()

    if user is None or not current_app.bcrypt.check_password_hash(
        user.password, password
    ):
        return jsonify({"msg": "Bad username or password"}), 401
  
    access_token = create_access_token(identity=email)
    return jsonify(access_token)


@api.route("/private", methods=["GET"])
@jwt_required()
def private():
    
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    dictionary = { "msg" : "hello world " + email }

    return jsonify(dictionary)


@api.route("/signup", methods=["POST"])
def handle_signup():
    body = json.loads(request.data) 
    
    hashed = current_app.bcrypt.generate_password_hash(body["password"]).decode('utf-8')
   
    body = {
        x: body[x]
        for x in [
            "first_name",
            "last_name",
            "email",
        ]
    }

    user = User(password=hashed, **body)

    db.session.add(user)
    db.session.commit()
    response_body = {
        "msg": "User account created successfully"
    }
    return jsonify(response_body), 200