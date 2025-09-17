export default function handler(req, res) {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const timestamp = new Date().toISOString();
    const { deviceId, qrCode, scanTime } = req.body;
    
    // Log the received data
    console.log('🔍 QR Scan Received:', {
      deviceId: deviceId || 'unknown',
      qrCode: qrCode || 'no-data',
      scanTime: scanTime || timestamp,
      receivedAt: timestamp,
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // Send success response
    return res.status(200).json({
      success: true,
      message: 'QR scan received successfully',
      timestamp: timestamp,
      data: {
        deviceId: deviceId || 'unknown',
        qrCode: qrCode || 'no-data'
      }
    });
  }

  if (req.method === 'GET') {
    // Health check endpoint
    return res.status(200).json({
      status: 'online',
      message: 'IoT QR Scanner API is running',
      timestamp: new Date().toISOString(),
      endpoints: {
        scan: 'POST /api/scan - Send QR scan data',
        health: 'GET /api/scan - Check API status'
      }
    });
  }

  // Method not allowed
  return res.status(405).json({
    error: 'Method not allowed',
    allowed: ['GET', 'POST']
  });
}