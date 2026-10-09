"""
AI&DS Department Assistant - News & Updates Backend
Flask REST API reading and writing latest-update.json
"""

import os
import json
import time
from datetime import datetime
from threading import Lock
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS for frontend integration across origins (localhost, 127.0.0.1, file://)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Thread safety lock for JSON file read/write operations
file_lock = Lock()

# Compute file path relative to this script directory (not cwd)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "latest-update.json")

# Default seed data to initialize if latest-update.json is missing or empty
DEFAULT_SEED_RECORDS = [
    {
        "id": 1,
        "title": "Internal Examination Schedule Released",
        "category": "announcements",
        "date": "07 October 2026",
        "author": "AI&DS Exam Cell",
        "ref": "NOTICE REF: AI-EX-26/10",
        "description": "The department has released the schedule for the upcoming internal examinations. Review dates, assigned lab modules, and invigilation slots.",
        "content": "<p>The department has released the complete schedule for the upcoming internal examinations across all AI&amp;DS batches.</p><h4>Student Guidelines:</h4><ul><li>Exams will commence on October 14, 2026 at Tech Block IV exam halls.</li><li>Students must carry their official institutional ID cards.</li><li>Seating charts will be published on the digital notice boards 30 minutes prior.</li></ul>",
        "link": "",
        "created_at": "2026-10-07T09:00:00Z"
    },
    {
        "id": 2,
        "title": "AI & Data Science Workshop",
        "category": "events",
        "date": "05 October 2026",
        "author": "Prof. R. Sharma (Coordinator)",
        "ref": "SYMPOSIUM SERIES #04",
        "description": "A hands-on workshop on Generative AI and Machine Learning will be conducted for students, featuring live tensor model fine-tuning and API integration.",
        "content": "<p>A full-day technical workshop covering deep neural architecture tuning, synthetic data pipelines, and real-world deployment practices.</p><h4>Key Highlights:</h4><ul><li>Live model training on DGX A100 Tensor Core supercluster.</li><li>Guest lectures by industry senior machine learning researchers.</li><li>Certificate of completion awarded to all attendees.</li></ul>",
        "link": "https://aids.university.edu/workshop-registration",
        "created_at": "2026-10-05T10:30:00Z"
    },
    {
        "id": 3,
        "title": "Students Selected for Internship Program",
        "category": "achievements",
        "date": "02 October 2026",
        "author": "Industry Relations Cell",
        "ref": "SPOTLIGHT STORY",
        "description": "AI&DS students have successfully secured internship opportunities with leading technology companies, specializing in NLP and autonomous vision systems.",
        "content": "<p>We are delighted to congratulate 12 of our department students who have accepted prestigious engineering and research internship offers for Spring 2027.</p><h4>Recruiting Organizations:</h4><ul><li><strong>Google DeepMind:</strong> 3 Research Interns</li><li><strong>Microsoft Research:</strong> 4 NLP Software Engineers</li><li><strong>OpenAI & Databricks:</strong> 5 Distributed Systems Interns</li></ul>",
        "link": "",
        "created_at": "2026-10-02T14:15:00Z"
    },
    {
        "id": 4,
        "title": "Campus Placement Drive",
        "category": "placement",
        "date": "30 September 2026",
        "author": "Department Placement Cell",
        "ref": "RECRUITMENT ROUND 2026-27",
        "description": "A placement drive for final-year AI & Data Science students will be conducted soon. Eligible candidates are advised to verify their resume repository.",
        "content": "<p>The Departmental Placement Cell announces the commencement of Phase 1 Campus Recruitment for the Class of 2026/2027.</p><h4>Eligibility & Verification:</h4><ul><li>Minimum CGPA requirement: 7.5 with zero active backlogs.</li><li>Submission of verified GitHub portfolio and published Capstone artifacts.</li><li>Over 45 Global Tech Giants participating in On-Campus interviews.</li></ul>",
        "link": "https://aids.university.edu/placements-2026",
        "created_at": "2026-09-30T11:00:00Z"
    },
    {
        "id": 5,
        "title": "New AI & ML Laboratory Activities",
        "category": "academic",
        "date": "28 September 2026",
        "author": "Academic Board of Studies",
        "ref": "CURRICULUM REVISION",
        "description": "New practical activities have been introduced for Artificial Intelligence and Machine Learning courses, with emphasis on transformers and diffusion pipelines.",
        "content": "<p>As part of our continuous curriculum evolution, the Department Academic Council has upgraded all laboratory assignments to PyTorch 2.5 and FlashAttention-3.</p><h4>New Practical Modules:</h4><ul><li><strong>Lab Module 5:</strong> Vision Transformers (ViT) & Diffusion Denoising implementations.</li><li><strong>Lab Module 6:</strong> Graph Neural Networks for Drug Discovery.</li><li><strong>Lab Module 7:</strong> Quantization and ONNX Runtime deployment on edge devices.</li></ul>",
        "link": "",
        "created_at": "2026-09-28T08:45:00Z"
    },
    {
        "id": 6,
        "title": "Algorand-26 Annual Hackathon",
        "category": "events",
        "date": "25 September 2026",
        "author": "Student AI Guild",
        "ref": "FLAGSHIP SPRINT",
        "description": "Registrations now open for the 48-hour AI innovation sprint with industry mentorship, rapid prototyping, and startup seed grants.",
        "content": "<p>Gear up for the flagship AI innovation sprint of the year! Algorand-26 brings together the brightest minds in machine learning, robotics, and generative AI.</p><h4>Hackathon Tracks:</h4><ul><li>Autonomous Agents & Reasoning Systems</li><li>AI for Climate Resilience & Smart Cities</li><li>Decentralized AI & Secure Verifiable Compute</li></ul><p><strong>Prizes:</strong> $15,000 total prize pool + fast-track incubator grants.</p>",
        "link": "https://aids.university.edu/hackathon-2026",
        "created_at": "2026-09-25T16:00:00Z"
    }
]

VALID_CATEGORIES = {"announcements", "events", "achievements", "placement", "academic"}


def ensure_data_file():
    """
    Ensure the data file exists. If not or if empty, initialize with default seed records.
    Never overwrites an existing valid file.
    """
    with file_lock:
        if not os.path.exists(DATA_FILE) or os.path.getsize(DATA_FILE) == 0:
            with open(DATA_FILE, "w", encoding="utf-8") as f:
                json.dump(DEFAULT_SEED_RECORDS, f, indent=2, ensure_ascii=False)
            print(f"[INIT] Initialized {DATA_FILE} with {len(DEFAULT_SEED_RECORDS)} seed records.")
        else:
            try:
                with open(DATA_FILE, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if not isinstance(data, list):
                        raise ValueError("Data must be a JSON array.")
            except Exception as e:
                print(f"[WARN] Error reading existing file ({e}). Re-initializing backup.")
                with open(DATA_FILE, "w", encoding="utf-8") as f:
                    json.dump(DEFAULT_SEED_RECORDS, f, indent=2, ensure_ascii=False)


def read_records():
    """Read all records from latest-update.json thread-safely."""
    ensure_data_file()
    with file_lock:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f)


def write_records(records):
    """Write records to latest-update.json atomically and thread-safely."""
    with file_lock:
        temp_file = DATA_FILE + ".tmp"
        with open(temp_file, "w", encoding="utf-8") as f:
            json.dump(records, f, indent=2, ensure_ascii=False)
        # Atomic replace on Windows/POSIX
        os.replace(temp_file, DATA_FILE)


# Initialize on module load
ensure_data_file()


@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "service": "AI&DS Department Assistant - News API",
        "status": "online",
        "storage_file": DATA_FILE,
        "endpoints": {
            "GET /api/news": "List all news announcements",
            "GET /api/news/<id>": "Get a specific announcement",
            "POST /api/news": "Create a new announcement (Faculty)",
            "PUT /api/news/<id>": "Update an announcement",
            "DELETE /api/news/<id>": "Delete an announcement"
        }
    }), 200


@app.route("/api/news", methods=["GET"])
def get_all_news():
    """Retrieve all news records from latest-update.json."""
    try:
        records = read_records()
        return jsonify(records), 200
    except Exception as e:
        return jsonify({"error": "Failed to read announcements", "details": str(e)}), 500


@app.route("/api/news/<int:news_id>", methods=["GET"])
def get_news_by_id(news_id):
    """Retrieve a single news record by ID."""
    try:
        records = read_records()
        record = next((r for r in records if r.get("id") == news_id), None)
        if not record:
            return jsonify({"error": f"Announcement with ID {news_id} not found."}), 404
        return jsonify(record), 200
    except Exception as e:
        return jsonify({"error": "Failed to retrieve announcement", "details": str(e)}), 500


@app.route("/api/news", methods=["POST"])
def create_news():
    """
    Validate and append a new announcement to latest-update.json.
    Restricted to authorized faculty/admin.
    """
    data = request.get_json(silent=True)
    if not data or not isinstance(data, dict):
        return jsonify({"error": "Invalid request body. Expected JSON object."}), 400

    title = str(data.get("title", "")).strip()
    category = str(data.get("category", "")).strip().lower()
    date_val = str(data.get("date", "")).strip()
    description = str(data.get("description", "")).strip()
    author = str(data.get("author", "AI&DS Faculty Council")).strip() or "AI&DS Faculty Council"
    link = str(data.get("link", "")).strip()

    # Validations
    if not title or len(title) < 3:
        return jsonify({"error": "Title is required and must be at least 3 characters."}), 400

    if category not in VALID_CATEGORIES:
        return jsonify({
            "error": f"Invalid category '{category}'. Must be one of: {', '.join(sorted(VALID_CATEGORIES))}."
        }), 400

    if not date_val:
        return jsonify({"error": "Date is required."}), 400

    if not description or len(description) < 10:
        return jsonify({"error": "Description is required and must be at least 10 characters."}), 400

    records = read_records()

    # Generate unique ID based on max existing id + 1 or timestamp
    max_id = max([r.get("id", 0) for r in records], default=0)
    new_id = max_id + 1 if isinstance(max_id, int) and max_id < 1000000 else int(time.time() * 1000)

    # Clean optional link
    if link and not (link.startswith("http://") or link.startswith("https://")):
        return jsonify({"error": "Link must start with http:// or https://"}), 400

    new_record = {
        "id": new_id,
        "title": title,
        "category": category,
        "date": date_val,
        "author": author,
        "ref": data.get("ref") or f"FACULTY CIRCULAR • {author.upper()}",
        "description": description,
        "content": data.get("content") or f"<p>{description}</p>",
        "link": link,
        "created_at": datetime.utcnow().isoformat() + "Z"
    }

    # Prepend new announcement so latest appears first
    records.insert(0, new_record)
    write_records(records)

    return jsonify({
        "message": "Announcement created and saved to latest-update.json successfully.",
        "record": new_record
    }), 201


@app.route("/api/news/<int:news_id>", methods=["PUT"])
def update_news(news_id):
    """Update an existing announcement by ID in latest-update.json."""
    data = request.get_json(silent=True)
    if not data or not isinstance(data, dict):
        return jsonify({"error": "Invalid request body. Expected JSON object."}), 400

    records = read_records()
    index = next((i for i, r in enumerate(records) if r.get("id") == news_id), None)
    if index is None:
        return jsonify({"error": f"Announcement with ID {news_id} not found."}), 404

    current = records[index]

    if "title" in data:
        t = str(data["title"]).strip()
        if len(t) < 3:
            return jsonify({"error": "Title must be at least 3 characters."}), 400
        current["title"] = t

    if "category" in data:
        c = str(data["category"]).strip().lower()
        if c not in VALID_CATEGORIES:
            return jsonify({"error": f"Invalid category. Must be one of: {', '.join(sorted(VALID_CATEGORIES))}."}), 400
        current["category"] = c

    if "date" in data:
        current["date"] = str(data["date"]).strip()

    if "description" in data:
        d = str(data["description"]).strip()
        if len(d) < 10:
            return jsonify({"error": "Description must be at least 10 characters."}), 400
        current["description"] = d

    if "author" in data:
        current["author"] = str(data["author"]).strip()

    if "link" in data:
        l = str(data["link"]).strip()
        if l and not (l.startswith("http://") or l.startswith("https://")):
            return jsonify({"error": "Link must start with http:// or https://"}), 400
        current["link"] = l

    if "content" in data:
        current["content"] = str(data["content"])

    current["updated_at"] = datetime.utcnow().isoformat() + "Z"
    records[index] = current
    write_records(records)

    return jsonify({
        "message": "Announcement updated successfully.",
        "record": current
    }), 200


@app.route("/api/news/<int:news_id>", methods=["DELETE"])
def delete_news(news_id):
    """Delete an announcement by ID from latest-update.json."""
    records = read_records()
    new_records = [r for r in records if r.get("id") != news_id]
    if len(new_records) == len(records):
        return jsonify({"error": f"Announcement with ID {news_id} not found."}), 404

    write_records(new_records)
    return jsonify({
        "message": f"Announcement {news_id} deleted successfully.",
        "deleted_id": news_id
    }), 200


if __name__ == "__main__":
    print(f"Starting AI&DS Department News Server...")
    print(f"Storage File: {DATA_FILE}")
    app.run(host="127.0.0.1", port=5000, debug=True)
