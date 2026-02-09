# Project Aqua Software - Submission Report

## Problem 1: ROV Control
- Implemented button functions for movement: forward, backward, left, right, ascend, descend.
- Added joystick placeholder function (`handleJoystickControl`) for future implementation.
- Code is in `problem-1-control/student-task.js`.

## Problem 2: Telemetry Monitoring
- Backend Node.js server (`server.js`) loads `sensor_data_500.json` and provides:
  - POST `/api/telemetry` for new entries
  - GET `/api/telemetry/latest` for latest telemetry
  - GET `/api/telemetry/history?limit=N` for recent history
- Frontend polls latest telemetry every 5s and displays depth, pressure, temperature, direction.
- System status:
  - NORMAL: < 1.8 bar
  - WARNING: 1.8–2.0 bar
  - CRITICAL: > 2.0 bar
- Files in `problem-2-telemetry/backend` and `problem-2-telemetry/frontend`.

## Problem 3: ML - Underwater Waste Detection
- Annotated dataset with 3 classes: bottle, polythene, styrofoam.
- YOLOv8n model training started (1 epoch for demo).
- Outputs and weights saved in `problem-3-ml/outputs` and `problem-3-ml/weights`.
- Training graphs (mAP, boxloss) saved in `performanceGraphs`.
- Roboflow dataset uploaded: link below.

## Limitations
- ML training not fully completed due to time constraints.
- Joystick control is a placeholder.
- Telemetry frontend works with demo polling but may need styling improvements.
