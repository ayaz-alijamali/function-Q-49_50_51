// Question ____ 49 


function listHobbies(...hobbies) {
    hobbies.forEach(hobby => {
      console.log(`I enjoy ${hobby}`);
    });
  }
  
  listHobbies('reading', 'painting', 'hiking', 'cooking');

  
  // Question ____ 50


  const idealDay = `
Morning:
I wake up to the gentle rays of the sun filtering through my window, feeling refreshed and ready for the day. I start with a yoga session to center my mind and energize my body, followed by a nutritious breakfast of fresh fruits and yogurt.

Afternoon:
I spend the afternoon immersed in creative pursuits, whether it's writing a new story, painting a canvas, or composing music. This time allows me to express myself fully and indulge in my passions.

Evening:
As the day winds down, I head outdoors for a peaceful hike in nature, surrounded by tall trees and singing birds. The evening sky paints a beautiful backdrop as I watch the sunset, feeling grateful for the beauty of the world around me.

Night:
I end the day with a cozy dinner with loved ones, sharing laughter and stories over a homemade meal. Then, I unwind with a good book or a favorite movie before drifting off to sleep, feeling content and fulfilled.
`;

console.log(idealDay);


// Question _____ 51


function calculateRectangleArea(length, width) {
    return length * width;
}
