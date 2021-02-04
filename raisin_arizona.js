// Team: Anastasia, Eppa and me

// version 1 
// const raisinAlarm = function(cookie) {
//     for (let i = 0; i < cookie.length; i++) {
//     //console.log(cookie)
//      if (cookie.includes("🍇")) {
//       return "Raisin alert!";
//     }
//   }
//   return "All good!";
// };

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]))



// version 2
// const raisinAlarm = function(cookie) {
//   if (cookie.includes("🍇")) {
//     return "Raisin alert!";
//   }  
//   return "All good!";
// };
// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]))


// version 3
const raisinAlarmArray = function(cookie) {
  let array = [];
  for (let arr of cookie)
  if (arr.includes("🍇")) {
    array.push("Raisin alert!");
  } else {
  array.push("All good!");
}
return array
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));