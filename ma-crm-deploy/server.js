const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'M&A CRM is running!' });
});

app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════╗
║                                                    ║
║         🚀 M&A CRM - Complete Edition              ║
║                                                    ║
║  Status:  ✅ Running                               ║
║  Port:    ${PORT}                                      ║
║  URL:     http://localhost:${PORT}                     ║
║                                                    ║
║  Features:                                         ║
║  • Complete Dashboard                              ║
║  • Deal Analytics with Charts                      ║
║  • Pipeline Management                             ║
║  • Contact Management                              ║
║  • Task Tracking                                   ║
║  • Document Dataroom with Viewer                   ║
║  • Permission Management                           ║
║  • Team Management                                 ║
║  • Global Search                                   ║
║                                                    ║
╚════════════════════════════════════════════════════╝
    `);
});
