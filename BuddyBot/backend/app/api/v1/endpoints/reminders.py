from flask import Blueprint, request, jsonify

reminders_bp = Blueprint('reminders', __name__)

@reminders_bp.route('/reminders', methods=['POST'])
def set_reminder():
    data = request.get_json()
    # Set reminder logic
    return jsonify({"message": "Reminder set!"}), 201
