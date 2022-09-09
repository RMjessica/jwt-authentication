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
    # password = hash(password)

    # user = User.query.filter_by(email=email, password=password).first()

    # if user is not None:
    #      access_token = create_access_token(identity=email)
    # return jsonify(access_token=access_token)

    if email != "test" or password != "test":
      return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

"""@api.route('/token', methods=['POST'])
def create_token():
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        if not email:
            return "Missing email", 400
        if not password:
            return "Missing password", 400
    
        pw_hash = bcrypt.generate_password_hash("elDecodifier").decode("utf-8")
        bcrypt.check_password_hash(pw_hash, "elDecodifier")

    return ("msg: ", "Token authorized"), 200 """











@api.route("/register", methods=["POST"])
def handle_registration():
    body = json.loads(request.data) 
    
    hashed = current_app.bcrypt.generate_password_hash(body["password"]).decode('utf-8')
    print(hashed_password)
    
    user = User(email = body["email"], password = hashed)
    print(user)
    db.session.add(user)
    db.session.commit()
    response_body = {
        "results": "Usuario añadido correctamente"
    }
    return jsonify(response_body), 200