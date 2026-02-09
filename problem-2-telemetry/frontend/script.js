async function updateTelemetry() {
  try {
    const res = await fetch('http://localhost:3000/api/telemetry/latest');
    const data = await res.json();
    const div = document.getElementById('telemetry');
    let status = 'NORMAL';
    if (data.pressure >= 1.8 && data.pressure <= 2.0) status = 'WARNING';
    else if (data.pressure > 2.0) status = 'CRITICAL';
    div.innerHTML = `
      Depth: ${data.depth} m<br>
      Pressure: ${data.pressure} bar (${status})<br>
      Temp: ${data.temperature} °C<br>
      Direction: ${data.direction}°<br>
      Timestamp: ${data.timestamp}
    `;
  } catch(e) { console.error(e); }
}

updateTelemetry();
setInterval(updateTelemetry, 5000);