# Advance-react-router-dom
A client-side routing app using react-router-DOM (built with advanced features)

## Features Implemented


https://github.com/user-attachments/assets/0ea20221-c644-4bc1-af0b-70724b5031da


# Routing

* Client-side routing using React Router DOM
* Navigation without full page reloads
* Multiple pages:
    * Home
    * About
    * Contact
    * Courses
    * Product

# Navigation

* Navigation bar using <Link>
* Active page navigation without refreshing the browser
* Footer component shared across pages

# Route Configuration

* Configured routes using:
    * BrowserRouter
    * Routes
    * Route

Example routes include:

* /
* /About
* /Contact
* /Courses
* /Product

# Nested Routing

Created nested routes inside the Product page.

Example:
  /Product
  /Product/Men
  /Product/Women

Used <Outlet /> to render child routes inside the parent Product component.

# Dynamic Routing

Implemented dynamic URL parameters using :id.

Example:
  /Courses/1
  /Courses/2
  /Courses/10

Retrieved route parameters using useParams().

# Programmatic Navigation

Used useNavigate() for navigation through JavaScript instead of only using links.

Example use cases:

* Redirect after button click
* Redirect after form submission
* Back navigation

# 404 Error Page

Implemented a custom Not Found page using:

  <Route path="*" element={<NotFound />} />

Handles every invalid URL gracefully.

Example:

  /abc
  /random
  /hello

All display the custom 404 page.

# Component-Based Architecture

Organized the application into reusable components.

Examples:

* Navbar
* Footer

# Separate page components:

* Home
* About
* Contact
* Courses
* Product
* Men
* Women
* NotFound

# Styling

* Styled using Tailwind CSS
* Responsive layout basics
* Utility-first CSS classes
* Custom global CSS for headings

# React Hooks Used

* useNavigate()
* useParams()

# React Router Concepts Learned

* BrowserRouter
* Routes
* Route
* Link
* Nested Routes
* Outlet
* Dynamic Routing
* URL Parameters
* useNavigate
* useParams
* Wildcard (*) Route
