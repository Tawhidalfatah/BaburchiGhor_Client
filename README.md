# Baburchi-Ghor

---

This is a single page demo chef-hunting application which uses React vite frontend library and React router DOM plugin and a firebase auth system to browse chefs and recipes from an api made with express.js hosted on vercel

## Features

- Home page contains a Navbar with login button and Home and Blog routes and user login picture renders conditionally when a user logins
- Nav bar links are dynamic that shows active links and inactive ones
- Then comes a banner section which uses a component from daisyui
- In Chefs section 6 cards are generated dynamically from the api showing 6 chefs and their details
- There is a View Recipe button in each Chef card which navigates to a new route showing the full details and the recipes of the selected chef
- In the Chefdetails route there are recipe infos and add to favourite button which activates a toast and gets disabled
- In home page , there is a carasole showcasing some food items
- Also there is a map section created with pigeon map package which shows the location of the company
- at the end there is a footer which contains the copyright infos of the company
- Clicking the blog route on the nav bar navigates to a blog page containing some questions and answers and there is a header which has a button to download a pdf format of that blog page
- login auth is configured with Google Sign in and as well as Github sign in

[Click to see the Project](https://b7a10-chef-recipe-hunter-80f49.web.app/)

[API Link](https://b7a10-chef-recipe-hunter-server-side-tawhidalfata-tawhidalfatah.vercel.app/)
