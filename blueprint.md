# Project Blueprint

## Overview

This is a simple web application that generates Lotto number recommendations. It provides users with 5 sets of 6 random numbers between 1 and 45.

## Design and Features

### Initial Version

*   **Layout:** A centered container on a gradient background.
*   **Styling:**
    *   **Background:** A linear gradient from purple to blue (`#667eea` to `#764ba2`).
    *   **Container:** A white card with rounded corners and a box shadow.
    *   **Button:** A green button that prompts the user to get numbers.
    *   **Lotto Balls:**
        *   Circular elements with a bold white number.
        *   Color-coded based on the number range:
            *   1-10: Yellow (`#f1c40f`)
            *   11-20: Blue (`#3498db`)
            *   21-30: Red (`#e74c3c`)
            *   31-40: Gray (`#7f8c8d`)
            *   41-45: Green (`#2ecc71`)
        *   An animation (`pop`) makes the balls appear to pop in.
*   **Functionality:**
    *   A single button "번호 추천 받기" (Get Number Recommendation).
    *   Clicking the button generates 5 sets of Lotto numbers.
    *   Each set contains 6 unique numbers, sorted in ascending order.
    *   The numbers are displayed as colored "Lotto balls".

## Current Task: Initial Setup

**Plan:**

1.  **Fetch Code:** Retrieve the HTML, CSS, and JavaScript from the provided URL (`https://product-builder-test1-3df.pages.dev`).
2.  **Create Files:**
    *   Create `index.html` with the main structure.
    *   Create `style.css` for styling.
    *   Create `main.js` for the application logic.
3.  **Link Files:** Update `index.html` to correctly link `style.css` and `main.js`.
4.  **Verify:** Ensure the application is running correctly in the preview.
