# Summary of what i learned today 🧑‍🏫


## Classes, Prototypes - Object Oriented JavaScript 🚩 :

- An enormously popular paradigm for structuring our complex code
- Prototype chain - the feature behind-the-scenes that enables emulation of OOP but is a compelling tool in itself
- Understanding the difference between __proto__ and prototype
- The new and class keywords as tools to automate our object & method creation

### Core of development (and running code)

1. Save data (e.g. in a quiz game the scores of user1 and user2)
2. Run code (functions) using that data (e.g. increase user 2’s score)
Easy! So why is development hard?
In a quiz game I need to save lots of users, but also admins, quiz questions, quiz 
outcomes, league tables - all have data and associated functionality 
In 100,000 lines of code
- Where is the functionality when I need it? 
- How do I make sure the functionality is only used on the right data!

### Solution 1. Generate objects using a function

Problems: Each time we create a new user we make space in our computer's 
memory for all our data and functions. But our functions are just copies
Is there a better way?
Benefits: It's simple and easy to reason about!

### Solution 2: Using the prototype chain

Store the increment function in just one object and have the interpreter, if it 
doesn't find the function on user1, look up to that object to check if it's there
Link user1 and functionStore so the interpreter, on not finding .increment, makes 
sure to check up in functionStore where it would find it
Make the link with Object.create() technique



