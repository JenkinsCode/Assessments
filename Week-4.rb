#### 1. Use Ruby to loop over this array, multiplying each element by 2.

# tempArray = [1, 2, 6, 9, 3, 21]
#
#
# # your ruby loop here
# tempArray.each do |number|
#   puts number * 2
#   end
#
#
# #### 2. From all the built in Ruby methods we've seen in class this week,
# #choose three that you think are particularly helpful and create examples to show how they work.
# # your three built in ruby methods
#
# #1. Methods that take in parameters
# def mult(a, b)
#   a * b
# end
#
# p mult(2, 5)

#2. The gets method
#
# puts "Can you tell me a secret?"
# response = gets.chomp
#
# #3. If/else statements
#
# def secret_keeper(response)
#   if response == "no"
#     p "fine, be that way"
#
#   else
#     p "I wont tell a soul!"
#   end
# end
# secret_keeper(response)

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

#ruby
class Example
  def initialize(day)
    @day=day
  end

  def say_hi(day)
    if(day == "Friday")
      p "TGIF!"

    elsif(day == "Monday")
      p "Its monday again"

    else
      p "another day"
    end
  end
end

t = Example.new('')
t.say_hi("")
