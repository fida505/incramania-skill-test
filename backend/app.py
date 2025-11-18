from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Root route to confirm the backend is running
@app.route("/")
def home():
    return jsonify({"status": "ok", "message": "Tweetalyze backend is running."})

# Dummy comments with varied lengths
dummy_comments = [
    # Red Flags (length > 10)
    {"username": "Vinay", "handle": "vinay_s", "avatarUrl": "https://i.pravatar.cc/40?u=vinay", "timestamp": "17m ago", "text": "Great job! This is amazing!"},
    {"username": "Anu", "handle": "anu_dev", "avatarUrl": "https://i.pravatar.cc/40?u=anu", "timestamp": "10m ago", "text": "This is absolutely fantastic work! Keep it up!"},
    {"username": "Roshni", "handle": "roshni_k", "avatarUrl": "https://i.pravatar.cc/40?u=roshni", "timestamp": "20m ago", "text": "Awesome work, keep going and never stop creating!"},
    {"username": "Midhun", "handle": "midhun_m", "avatarUrl": "https://i.pravatar.cc/40?u=midhun", "timestamp": "30m ago", "text": "This needs significant improvement in many areas."},

    # Green Flags (length <= 10)
    {"username": "shree", "handle": "shree_s", "avatarUrl": "https://i.pravatar.cc/40?u=shree", "timestamp": "5m ago", "text": "Love it!"},
    {"username": "Fathima", "handle": "fathima_f", "avatarUrl": "https://i.pravatar.cc/40?u=fathima", "timestamp": "15m ago", "text": "Not good"},
    {"username": "Vadhu", "handle": "vadhu_v", "avatarUrl": "https://i.pravatar.cc/40?u=vadhu", "timestamp": "25m ago", "text": "Nice"},
    {"username": "Akasha", "handle": "akasha_a", "avatarUrl": "https://i.pravatar.cc/40?u=akasha", "timestamp": "35m ago", "text": "👍"},
]

@app.route("/comments")
def get_comments():
    # Classify comments based on length, as per the requirement
    red_flag = [c for c in dummy_comments if len(c['text']) > 10]
    green_flag = [c for c in dummy_comments if len(c['text']) <= 10]
    
    return jsonify({
        "red_flag": red_flag, 
        "green_flag": green_flag
    })

# This endpoint now accepts both GET & POST, as per your original working code
@app.route("/hide", methods=["GET", "POST"])
def hide_comments():
    print("Hide API called!")
    return jsonify({"message": "Red Flag comments hidden (dummy API call successful)"})

if __name__ == "__main__":
    app.run(debug=True)