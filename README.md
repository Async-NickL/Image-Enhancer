# Image Enhancer

A modern web application that enhances and upscales images using AI technology powered by the PicWish API.

## Features

- Upload images for AI-powered enhancement
- Real-time processing status updates
- View and download enhanced images
- Modern, responsive UI built with React

## Tech Stack

- React
- Vite 
- Tailwind CSS
- Axios for API communication
- [PicWish API](https://picwish.com/) for image enhancement and processing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PicWish API credentials (sign up at [picwish.com](https://picwish.com/))

### Installation

1. Clone the repository:
```bash
https://github.com/Async-NickL/Image-Enhancer.git
cd image-enhancer
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Configure API credentials:
   - Create a `src/utils/config.js` file with the following content:
   ```javascript
   export const API_KEY = 'your_api_key_here';
   export const BASE_URL = 'https://techhk.aoscdn.com';
   ```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Usage

1. Upload an image using the upload button
2. Wait for the AI to process and enhance your image
3. View and download the enhanced result

## API Integration

This application uses the [PicWish](https://picwish.com/) API for image enhancement. PicWish provides powerful AI-driven tools for:
- Enhancing image quality
- Unblurring images
- Increasing resolution

You'll need to obtain your own API credentials from PicWish to use this application.

## Note on Configuration

The `src/utils/config.js` file contains sensitive API information and is excluded from version control. Make sure to create this file with valid PicWish API credentials before running the application.
