## Bargreen Technical Challenge

This is a simple website built using NextJS, React, Redux, and Typescript that queries data from [Fake Store API](https://fakestoreapi.com/). 

Choose one or two of the feature requests below, then fork this project and implement the chosen feature(s) in your copy. 
We would like you to spend about two hours of development time total on this challenge, and if you choose to target just one feature request we would like to see it more fully fleshed out/complete. 

1. Add a login flow
    * - Add a redux state to track user login status
    * - Update AccountButton with some conditional rendering to represent login status
    * - Hide product prices > $500 from signed out users, replace label with "Sign in to view pricing" or similar verbage
    * - Implement a sign out action
    
2. Add catalog filtering/sorting
    * - Create a display component for a product's `rating` property
    * - Create a sidebar component in Catalog that can sort and filter based on product price and rating

3. Create the shopping cart
    * - Add a redux state that will hold a retrieved shopping cart (bonus points: if you chose to implement #1, grab the signed in user's shopping cart)
    * - Add redux actions for adding, updating, and deleting the stored cart
    * - Create a shopping cart component with controls, and functional "add to cart" buttons on ProductTile

### Here are some criteria we will use to evaluate these features:
- Understanding of state-based rendering and related logic
- Stylistic consistency with the source material
- Organization and readability (comments are welcome!)
- Bonus points for creativity, QoL improvements, etc., feel free to add some personal touch

No need to worry about mobile styling/reactive design, assume this is a desktop only site/app

Good luck!

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
