# Malen - A Simple Web Drawing App

"Malen" (German for "to draw") is a minimalist, single-file web-based drawing application. It provides a touch and mouse-enabled canvas that leverages WebGL for high-performance rendering.

## Features

*   **Responsive Drawing:** Works on desktop with a mouse or on mobile/tablet devices with touch.
*   **Dynamic Brush Size:** The line width changes dynamically based on your drawing speed.
*   **Color Palette:** A selection of 16 vibrant colors to choose from.
*   **Safe Clear:** Press and hold the trash icon for 3 seconds to clear the canvas, preventing accidental erasures.
*   **Progressive Web App (PWA):** Can be "installed" to your device's home screen for easy access.
*   **Zero Dependencies:** Runs directly in any modern browser with no build steps required.

## How to Run

Since this is a simple, self-contained HTML file, there's no need for a build process or complex setup.

### Local File Access

Simply open the `index.html` file directly in your browser.

**macOS**
```bash
open index.html
```

**Linux**
```bash
xdg-open index.html
```

**Windows**
```bash
start index.html
```

### Local Server (for Mobile Testing)

To test the application on a mobile device on the same network, you can start a simple local web server:

```bash
python3 -m http.server 8080
```

Then, on your mobile device's browser, navigate to the local IP address of your computer on port 8080 (e.g., `http://192.168.1.100:8080`).

## Tech Stack

*   **Frontend:** Vanilla JavaScript, HTML5, CSS3
*   **Rendering:** WebGL for fast, hardware-accelerated 2D point rendering.
*   **Architecture:** All code is contained within a single `index.html` file.
