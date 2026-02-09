# API Specification - Telemetry Monitoring

## POST /api/telemetry
- Description: Add a new telemetry entry
- Payload (JSON):
```json
{
  "depth": 5.2,
  "pressure": 1.5,
  "temperature": 20,
  "direction": 90,
  "timestamp": "2026-02-09T12:00:00Z"
}