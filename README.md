# Purchase Orders Viewer

This project consists of an HTML, CSS and JavaScript-based tool to display and interact with purchase orders data stored in a JSON file. The project uses a simple interface to display a list of purchase orders, with each order linked to additional details viewable in a pop-up.

### Table of Contents

1. [Overview](#Overview)
2. [HTML Structure](#HTML-Structure)
3. [JavaScript Functions Explained](#JavaScript-Functions-Explained)
    - [Data Parsing and Display](#1-Data-Parsing-and-Display)
    - [displayOrderDetails()](#2-displayorderdetails)
    - [closePopup()](#3-closepopup)
    - [populateOrders()](#4-populateorders)
    - [fetchOrders()](#5-fetchorders)
4. [How This Project Relates to My Resume](#how-this-project-relates-to-my-resume)

   
#### Overview
The goal of this project is to present purchase orders in a user-friendly way. Orders are listed with clickable links, and when a link is clicked, a pop-up displays detailed information about that particular order. The code utilizes basic JavaScript to parse a JSON file and dynamically generate the content on the page.

#### HTML Structure
The core HTML structure consists of a main container where the order links are appended, and a hidden pop-up window to display additional details for each order.

```html
div id="order-List";      :  This is the main container where the list of purchase orders is dynamically added.
div id="overlay";         :  A full-screen overlay that appears when the pop-up is displayed.
div id="order-popup";     :  The actual pop-up box containing the order details and a close button.
```

#### JavaScript Functions
##### FormatData: 
This function converts the date string from the JSON file into a more readable format. It splits the date string into components, rearranges them, and returns a formatted string.
##### DisplayOrders:
This function is responsible for fetching the purchase orders from the JSON sample (this would typically come from a server) and displaying them as clickable links.
This function creates a clickable link for a given purchase order.
It sets up an event listener on each link to display the pop-up with the order details when clicked.

##### ShowOrderDetailes(order):
This function is triggered when an order link is clicked.
It populates the pop-up with detailed information about the selected order (e.g., order.id, order.totalPrice, ...).
This function updates the inner HTML of the pop-up with the order data, using the formatDate() function to display the date in a readable format.
Pop-up Management
##### closePopup():
This function is responsible for closing the pop-up window.
It removes the "active" class from the overlay and the pop-up content, hiding them from view.
It is triggered when the "Close" button is clicked or when the overlay itself is clicked.

##### Event Listeners:

An event listener is added to the close button and the overlay background to listen for clicks and close the pop-up when necessary.



### How This Project Relates to My Resume ?
- In this project, I demonstrated my advanced level of JavaScript by managing to provide clean, functional code in a simple manner. The design of each function reflects best practices for writing maintainable and efficient code, focusing on readability and modularity. This project showcases my ability to work with JSON data and dynamically interact with HTML elements using event listeners, skills that align with my professional experience as a front-end developer.

- This project provides a simple and interactive way to display purchase orders. The JavaScript functions are designed to handle data fetching, formatting, and dynamic content generation, while the pop-up management ensures a smooth user experience.
