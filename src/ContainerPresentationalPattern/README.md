# Container and Presentation Patterns

The **Container and Presentation Pattern** is a design pattern that aims to separate presentation logic from business logic in React code. This separation makes the code modular, testable, and adheres to the principle of separation of concerns. In React applications, there are often scenarios where data needs to be fetched from a backend/store or logic needs to be computed, and the results displayed in a React component. In such cases, the container and presentation pattern is beneficial as it categorizes components into two types:

- **Container Component**: Responsible for data fetching or computation.
- **Presentation Component**: Responsible for rendering the fetched data or computed value on the user interface (UI).

An example of the Container and Presentation Pattern is shown below: