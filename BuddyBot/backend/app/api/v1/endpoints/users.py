from flask import Blueprint, request, jsonify

users_bp = Blueprint('users', __name__)

@users_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    # Fetch user logic
    return jsonify({"user": {"id": user_id, "name": "Sample User"}})
