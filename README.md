# IoT QR Scanner Server

## Quick Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from this folder:
```bash
vercel
```

4. Your API will be available at: `https://your-project.vercel.app/api/scan`

## Configure Your IoT Device

Based on your screenshot, set:
- **Server**: `your-project.vercel.app`
- **Port**: `443` (HTTPS)
- **Path**: `/api/scan`
- **Method**: `POST`

## API Endpoints

### POST /api/scan
Send QR scan data:
```json
{
  "deviceId": "device123",
  "qrCode": "scanned-data",
  "scanTime": "2025-09-17T12:00:00Z"
}
```

### GET /api/scan
Health check - returns server status

## Quick Test
```bash
curl https://your-project.vercel.app/api/scan
```