
// var yakovGreeter = {};
// yakovGreeter.name = 'Yaakove';
// var greeting = 'Hello ';
// yakovGreeter.sayHello = function () {
//     console.log(greeting + yakovGreeter.name)
// }

// var a = function() {
//     console.log("Hello cousera!");
// }
// a();

// (function(window) {
//     var johnGreeter = {};
//     johnGreeter.name = 'John';
//     var greeting = "H1 ";
//     johnGreeter.sayHi = function() {
//         console.log(greeting + johnGreeter.name);
//     }
//     window.johnGreeter = johnGreeter;
// })(window);



// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
// (function () {
  //   // var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  //   for(i = 0; i < names.length; i++){
  //     if (names[i].charAt[0].toLowerCase() === 'j') {
  //       byeSpeaker.speak(names[i]);
  
  //     }else{
  //       helloSpeaker.speak(names[i]);
  //     }
  //   }
  // })
  // ();

  (function () {

    var names = ["Yaakov", "John", "Jen", "jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
      if (names[i].charAt(0).toLowerCase() === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    })();
