# Tweetalyze - Advanced Tweet Sentiment Analysis App

## 🧠 Project Overview

This web application was developed as a submission for the **Python Full Stack Developer skill test from Incramania Pvt Ltd**.

While the original task asked for a simple length-based classification, this project goes a step further to "Show creativity and capability" as encouraged in the prompt. Instead of using a Python backend for simple logic, this app demonstrates a modern, serverless frontend approach by **integrating directly with the Google Gemini API** to perform real-time sentiment analysis on simulated tweet comments.

This approach showcases a strong understanding of modern frontend development, API integration, and asynchronous JavaScript.

---

## ✨ Key Features & Enhancements

*   **Direct Google Gemini API Integration:** The app fetches and analyzes comments by making direct calls to the Gemini API from the frontend, showcasing a modern serverless architecture.
*   **Advanced Sentiment Analysis:** Instead of basic length-based filtering, the Gemini API classifies each comment as `Positive`, `Negative`, or `Neutral`, providing much deeper insight.
*   **Modern & Unique UI:** A custom, professional **Slate Blue & Neon Green** theme built with Tailwind CSS for a polished user experience.
*   **Interactive Statistics:** The UI displays a summary of total, positive, negative, and neutral comments. These cards are clickable and smoothly scroll the user to the corresponding section.
*   **Dynamic Sorting:** Users can sort both positive and negative comment sections by length (`Longest First` or `Shortest First`).
*   **Fully Responsive Design:** The interface works seamlessly on both desktop and mobile devices.
*   **Robust User Feedback:** Provides clear feedback with skeleton loaders during API calls and user-friendly error messages if something goes wrong.

---

## 🛠️ Tech Stack

*   **Frontend:**
    *   **React.js & TypeScript:** For a robust and scalable component-based architecture.
    *   **Tailwind CSS:** For rapid, utility-first UI development.
    *   **@google/genai:** The official Google Gemini API client for JavaScript.
*   **Backend:**
    *   **None (Serverless):** This project intentionally uses a serverless frontend architecture to demonstrate modern web development practices. It relies on the Google Gemini API for its core logic.

---

## 🚀 Getting Started & Installation

To run this project locally, you will need to set up the frontend client and provide a Google Gemini API key.

### Prerequisites

*   Node.js and npm
*   A Google Gemini API Key (you can get one from [Google AI Studio](https://aistudio.google.com/))

### Setup Instructions

1.  **Clone the Repository** (if you haven't already).
2.  **Navigate to the Frontend Directory:**
    ```bash
    cd <path-to-your-project-folder>
    ```
3.  **Create an Environment File:**
    Create a new file named `.env` in the root of your project folder.
4.  **Add Your API Key:**
    Inside the `.env` file, add your Gemini API key like this:
    ```
    API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```
    Replace `YOUR_GEMINI_API_KEY_HERE` with your actual key.

5.  **Install Dependencies:**
    ```bash
    npm install
    ```
6.  **Run the Development Server:**
    ```bash
    npm start 
    ```
    The application will automatically open in your browser, usually at `http://localhost:3000/`.

---

## 📋 How to Use the App

1.  Ensure the development server is running.
2.  Open the app in your browser.
3.  Copy the URL of any tweet from X (Twitter).
4.  Paste the URL into the input box.
5.  Click the **"Analyze Tweet"** button.
6.  The app will display a loading animation while it communicates with the Gemini API.
7.  Once complete, it will display the generated comments, categorized by their sentiment.
