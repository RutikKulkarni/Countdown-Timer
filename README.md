# Countdown Timer

This web application allows users to input a specific date and time, after which the application will display a countdown timer that counts down to the specified date and time from the current date and time.

### Live Demo

- [CodeSandbox Link](https://codesandbox.io/p/sandbox/countdown-timer-9rrq59)

## Features

- User input for the target date and time.
- Real-time countdown display.
- Ability to cancel and create a new countdown at any time.
- Responsive design for various screen sizes.
- Optional: Sound notification for when the countdown is complete.
- Optional: Persist countdown even if the browser tab is reopened again.

## Functional Requirements

### Input Form

- Provide a form with fields for the user to input the target date and time.
- Validate the input to ensure it is in a valid date and time format.

### Countdown Timer

- Display the countdown timer in a visually appealing format.
- Update the countdown timer in real-time to reflect the remaining time.

### Cancel / Stop Countdown Timer

- Allow the user to stop the countdown timer at any point in time.

### Validations

- The maximum days for the countdown timer should be 99 days.
- The maximum hours for the countdown timer should be 23 hours.
- The maximum minutes for the countdown timer should be 59 minutes.
- The maximum seconds for the countdown timer should be 59 seconds.
- The cut-off date for the date picker should be 99 days from the current date.
- The countdown timer should not go below 0.

### Responsive Design

- Ensure the application is responsive and displays correctly on desktop and mobile devices.

## Technologies

- Frontend: HTML, CSS, JavaScript, React

