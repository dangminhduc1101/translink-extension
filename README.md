# TransLink Extension

The TransLink Extension is a Firefox extension designed to enhance your experience with TransLink bus schedules. This extension provides a convenient way for users to access TransLink bus schedules directly from their web browsers. Whether you're a regular commuter or an occasional bus rider, this extension aims to simplify the process of checking bus schedules, making your transit experience more efficient.

## Features (to be updated)

- **Easy Access to Bus Schedules:** Quickly view and access bus schedules within your browser without the need to visit the official TransLink website.

- **Real-Time Updates:** Stay informed about any real-time updates or changes to bus schedules, ensuring that you have the latest information for your commute.

- **Intuitive User Interface:** The extension features a user-friendly interface, making it easy for users of all levels to navigate and find the information they need.

## Installation

### Prerequisites

- **Linux, Firefox, Node.js 20.10.0:**
  Ensure your system runs Linux, has Firefox installed, and Node.js version 20.10.0 is available.

### Steps

1. **Clone and Navigate:**
   ```bash
   git clone https://github.com/dangminhduc1101/translink-extension.git
   cd translink-extension
   ```

2. **Install Dependencies:**
   ```bash
   npm ci
   ```

3. **Run Debug Mode:**
   ```bash
   npm run debug
   ```

Now, the TransLink Extension is running in debug mode in Firefox. Test and debug the extension as needed during development.

## Usage

1. After installation, you will see the TransLink icon in your browser toolbar.
2. Click on the icon to open the extension.
3. Stay updated with real-time information and plan your transit accordingly.

## To-do List
- [ ] Expand the available bus routes and stops.
- [ ] Improve user configurations and customizations, including selecting favorite buses, stops.
- [ ] Add countdown till bus departure using extension icon.
- [ ] Implement a dark mode for the extension.
- [ ] Add support for other browsers.
- [ ] Create a user feedback form within the extension.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the extension according to the terms of the license.

## Acknowledgments

The TransLink Extension relies on the OpenAPI provided by TransLink. We appreciate their efforts in making transit information accessible to the public.

Happy commuting! 🚌✨
