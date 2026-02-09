# Project Aqua Software Recruitment

## Overview
This repository contains the solutions for the Project Aqua Software Recruitment tasks, including ROV control, telemetry monitoring, and underwater waste detection using YOLO.

---

## Folder Structure

### Problem 1 – Control Logic
`problem-1-control/`  
- Implements ROV movement logic including tank drive (differential steering) and joystick controls.  
- Includes `student-task.js`, `engine.js`, `index.html`, and `style.css`.

### Problem 2 – Telemetry Monitoring
`problem-2-telemetry/`  
- Backend: Node.js server for real-time telemetry data.  
  - `backend/server.js`  
  - `backend/sensor_data_500.json`  
- Frontend dashboard: polls telemetry and visualizes depth, pressure, temperature, and direction.  
  - `frontend/index.html`  
  - `frontend/script.js`  

### Problem 3 – Machine Learning
`problem-3-ml/`  
- YOLOv8 object detection model trained on underwater waste.  
- Contains dataset annotations, weights (YOLO model), and training outputs.  
- Key files:  
  - `dataset/` – annotated images in YOLO format  
  - `runs/` – training logs and results  
  - `yolov8n.pt` – pretrained YOLO model weights  

---

## Other Files
- `report.md` – Project report and critical analysis.  
- `api-spec.md` – Backend API specification.  

---

## Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/mt-blip34/ProjectAquaSoftware.git