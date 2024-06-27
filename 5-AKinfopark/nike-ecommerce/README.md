# Nike Air Zoom

Welcome to **Nike Air Zoom**, a small shoe brand project that demonstrates a modern admin page with API integration for fetching, updating, adding, and removing products, as well as routing through different pages. This project was built using React and React Router.

## Project Overview

**Nike Air Zoom** includes three main pages:

- **Home Page**: Showcases the brand with an introduction and featured collections.
- **Footwear Page**: Displays different categories of shoes including all shoes, trail shoes, and water-proof shoes.
- **Admin Page**: Allows administrators to manage the product inventory by adding, updating, and removing products.

## Features

- **API Integration**: Fetch, add, update, and remove products from the server.
- **Routing**: Navigate through different pages using React Router.
- **State Management**: Manage global state using Context API.
- **Responsive Design**: Fully responsive layout for all pages.

## Project Structure

```
src
├── components
│   ├── AboutShoes
│   ├── AboutUs
│   ├── AdminShoeTab
│   ├── Collection
│   ├── ErrorFetch
│   ├── Footer
│   ├── FooterForm
│   ├── Hero
│   ├── Loader
│   ├── Navbar
│   ├── Overlay
│   └── ProductForm
├── context
│   └── DataContext.js
├── hooks
│   └── useForm.js
├── pages
│   ├── Admin
│   ├── Footwear
│   ├── Home
│   ├── Main
│   └── Shoe
├── utilities
│   └── variables.js
└── App.js
```

## Usage

- **Home Page**: Visit the home page to learn more about Nike Air Zoom and view featured products.
- **Footwear Page**: Explore the different categories of shoes available.
- **Admin Page**: Manage the product inventory by adding, updating, and removing products.

## Components

### `App.js`

Sets up the main application and routes.

### `Home`

Displays the home page with sections for hero, collection, about shoes, about us, and footer.

### `Footwear`

Contains the layout for footwear categories and individual shoe details.

### `Admin`

Provides the admin interface for managing products, including forms for adding and updating products.

### `Main`

Includes the navigation bar and sets up the main section for routing.
