# Seamfix NextGen Week 6 Assignment

This is an Angular application built as part of an assignment to demonstrate various reactive programming and state management concepts in a real-world application.

## Features Implemented

- State Management: Uses writable signals to manage and read state across components.
- Reactive Background Color: Implements a select option in the navbar that allows users to choose a background color.
- RxJS Subjects: Demonstrates the use of both `Subject` and `BehaviorSubject` to broadcast the selected background color to all components.
- Signal Forms: The login page is wired up using Angular Signal Forms, complete with validation schemas for email and password inputs.
- Simulated API Requests: The `LoginService` simulates authentication requests using two different approaches:
  - Promises: Resolves or rejects the login attempt after a simulated network delay.
  - Observables: Uses RxJS operators (`map`, `tap`) to transform the submitted credentials to uppercase before logging them, simulating data transformation in a stream.
