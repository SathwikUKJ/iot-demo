// Quick test script for the IoT QR API
// Usage: node test-api.js [your-vercel-url]

const url = process.argv[2] || 'http://localhost:3000';
const endpoint = `${url}/api/scan`;

console.log('🧪 Testing QR Scanner API...\n');

// Test 1: Health Check
console.log('1. Health Check (GET):');
fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    console.log('✅ Status:', data.status);
    console.log('📝 Message:', data.message);
    console.log('');
  })
  .catch(err => console.log('❌ Health check failed:', err.message));

// Test 2: QR Scan Simulation
setTimeout(() => {
  console.log('2. QR Scan Test (POST):');
  
  const testData = {
    deviceId: 'TEST-DEVICE-001',
    qrCode: 'QR-12345-TEST-DATA',
    scanTime: new Date().toISOString()
  };
  
  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(testData)
  })
  .then(res => res.json())
  .then(data => {
    console.log('✅ Success:', data.success);
    console.log('📝 Message:', data.message);
    console.log('📊 Data:', data.data);
    console.log('\n🎉 API is working! Configure your IoT device now.');
  })
  .catch(err => console.log('❌ QR scan test failed:', err.message));
}, 1000);