# Locatr

A real-time location tracking web application that allows multiple users to share and view their locations on an interactive map. Built with Node.js, Express, Socket.IO, and Leaflet.

## Features

- **Real-time Location Sharing**: Users can share their current location with others in real-time
- **Interactive Map**: Powered by Leaflet and OpenStreetMap for smooth map interactions
- **Multi-user Support**: Multiple users can connect simultaneously and see each other's locations
- **Automatic Updates**: Location markers update automatically as users move
- **Clean Disconnection**: User markers are removed when they disconnect

## Technology Stack

- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Frontend**: HTML, CSS, JavaScript
- **Mapping**: Leaflet.js with OpenStreetMap tiles
- **Template Engine**: EJS

## Prerequisites

Before running this application, make sure you have:

- Node.js (version 12 or higher)
- npm (Node Package Manager)
- A modern web browser with geolocation support
- HTTPS connection (required for geolocation API in production)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd locatr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   
   The server will start on `http://localhost:8000`

## Usage

1. **Open your browser** and navigate to `http://localhost:8000`

2. **Allow location access** when prompted by your browser

3. **Share the URL** with others to see their locations on the same map

4. **View real-time updates** as users move around - their markers will update automatically

## File Structure

```
locatr/
├── index.js              # Main server file
├── package.json          # Project dependencies and scripts
├── views/
│   └── index.ejs        # Main HTML template
├── public/
│   ├── style.css        # Styling for the application
│   └── assets/
│       └── script.js    # Client-side JavaScript
└── README.md            # Project documentation
```

## Configuration

### Server Settings
- **Port**: The server runs on port 8000 by default
- **View Engine**: Uses EJS for templating
- **Static Files**: Served from the `public` directory

### Geolocation Settings
- **High Accuracy**: Enabled for precise location tracking
- **Maximum Age**: Set to 0 for fresh location data
- **Timeout**: 2.5 seconds for location requests

## API Endpoints

### HTTP Routes
- `GET /` - Serves the main application page

### Socket.IO Events

#### Client to Server
- `send-location` - Sends user's current coordinates
  ```javascript
  socket.emit("send-location", { latitude, longitude });
  ```

#### Server to Client
- `receive-location` - Broadcasts location updates to all clients
  ```javascript
  socket.on("receive-location", (data) => {
    // data contains: { id, latitude, longitude }
  });
  ```

- `user-disconnected` - Notifies when a user disconnects
  ```javascript
  socket.on("user-disconnected", (id) => {
    // Remove user's marker from map
  });
  ```

## Security Considerations

⚠️ **Important Security Notes:**

- **HTTPS Required**: Geolocation API requires HTTPS in production environments
- **Privacy**: This app shares real-time location data - ensure users understand what they're sharing
- **Rate Limiting**: Consider implementing rate limiting for production use
- **Input Validation**: Add server-side validation for location data

## Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Geolocation Support**: Required for core functionality
- **WebSocket Support**: Required for real-time updates

## Deployment

### Local Development
```bash
npm start
```



## Troubleshooting

### Common Issues

1. **Geolocation not working**
   - Ensure HTTPS is enabled
   - Check browser permissions for location access
   - Verify browser supports geolocation API

2. **Map not loading**
   - Check internet connection
   - Verify Leaflet CDN links are accessible
   - Check browser console for JavaScript errors

3. **Real-time updates not working**
   - Check WebSocket connection
   - Verify Socket.IO CDN link
   - Check server console for connection errors

### Debug Mode
Enable detailed logging by modifying the server console outputs in `index.js`.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- [Leaflet](https://leafletjs.com/) for the mapping library
- [Socket.IO](https://socket.io/) for real-time communication
- [OpenStreetMap](https://www.openstreetmap.org/) for map tiles
- [Express.js](https://expressjs.com/) for the web framework
