### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.

Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. They only have a render() method and they don’t have internal state to manage.

Smart components are also known as container components are the ones that keep track of state and care about how the app works.




#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


Installs a package and any packages that it depends on.


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

1. There is no div on line 56 and 59 1/2
2. On line 36 it should be this.state.props
3. On line 51 it should recipe.name should have recipe.props.name

    import React, { Component } from 'react';

    class Recipes {
      constructor(props){
        super(props)
        this.state = {
          recipes:
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}

        }
      }

      render() {

        return (

          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })

          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer


 //Googled Answer
 <input type="button">
 <input type="checkbox">
 <input type="color">

 #### 7. How would you explain state to a friend who doesn't know code?

State is used when you have a value that needs changing. For example, a like button is like a checkbox that is unchecked. Once checked, it changes its state.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.

Props make react component reusable so you can use the same component with different data every time.

State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used or modified inside the component. Props, on the other hand, make components reusable by giving components the ability to receive data from the parent component in the form of props.


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Personally, building something in react was very intimidating at first and slowly became less unusual as we ran through it several times. Even now, while doing research I am somewhat baffled on some of the key concepts. I think its cool FB had to create its own language and now look at it very differently. Having a website using components seems more manageable. With a little organization and planning, it can be useful when approaching different sections of a page. Its hard to be part of a team or with a pair when you basically are just trying to keep up and understand. I think I learned a lot about how to be a good partner. Some pairings worked well because when one didnt understand, the other could help. Or When we both needed help with something, we had both of us searching for solutions we could share and talk about. But I think it was when I was in a team that left me feeling like crap. Those were big learning moments for me. Building an app from scratch takes a lot of planning and work. Much more work than I ever thought.
