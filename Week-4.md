# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
Ruby methods are used to bundle one or more repeatable statements into a single unit. They share a lot of similarities to javascript functions in that they can take in arguments and can contain loops and logic.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

Inheritance allows the programmer to inherit the characteristics of one class into another class. Ruby supports only single class inheritance, it does not support multiple class inheritance but it supports mixins. The mixins are designed to implement multiple inheritances in Ruby, but it only inherits the interface part.

Inheritance provides the concept of “reusability”, so, If a programmer wants to create a new class and there is a class that already includes some of the code that programmer wants, then he or she can derive a new class from the existing class.Doing this increases the reuse of the fields and methods of the existing class without creating extra code.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications.


#### 4. Name three possible non-inheritance relationships between ruby objects?

Could not answer.


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
It is printing the value of variable x. In this instance it would be 1022

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

Unsure about testing because I was not here that day.


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

An instance variable has a name beginning with @ , and its scope is confined to whatever object it refers to.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

Instance variables of ruby do not need declaration.

Instance variables live in, and are visible everywhere in the object’s scope.

An attribute reader returns the value of an instance variable.
