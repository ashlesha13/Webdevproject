
// buttonclick();
// let arr=['box1','box2','box3']
// array.forEach(arr => {
//      console.log("this is array");
//     document.getElementById(arr);
//    return; 
// });

document.addEventListener('DOMContentLoaded', function() {
  let box = document.getElementById('box1');

  box.addEventListener('mouseover', function() {
    // Make the box big
    box.style.width = '350px';
    box.style.height = '150px';
  });

  box.addEventListener('mouseout', function() {
    // Go back to the original size
    box.style.width = '350px';
    box.style.height = '75px';
  });
});
document.addEventListener('DOMContentLoaded', function() {
    let box = document.getElementById('box2');
  
    box.addEventListener('mouseover', function() {
      // Make the box big
      box.style.width = '350px';
      box.style.height = '150px';
    });
  
    box.addEventListener('mouseout', function() {
      // Go back to the original size
      box.style.width = '350px';
      box.style.height = '75px';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    let box = document.getElementById('box3');
  
    box.addEventListener('mouseover', function() {
      // Make the box big
      box.style.width = '350px';
      box.style.height = '150px';
    });
  
    box.addEventListener('mouseout', function() {
      // Go back to the original size
      box.style.width = '350px';
      box.style.height = '75px';
    });
  });
    
let button=document.querySelector('button')
let buttonclick =()=> {
    alert("added to cart");
}
// document.addEventListener('DOMContentLoaded', function() {
//     var content = document.getElementById('content');
//     var toggleButton = document.getElementById('toggleButton');

//     toggleButton.addEventListener('click', function() {
//       // Toggle the display property of the content
//       if (content.style.display === 'none') {
//         content.style.display = 'block';
//       } else {
//         content.style.display = 'none';
//       }
//     });
//   });
//   let dbclick=document.querySelector('button')
// function Toggle() {
//   let contentDiv = document.getElementById("selector");
//   if (contentDiv.style.display === "block") {
//     contentDiv.style.display = "none";
//   } else {
//     contentDiv.style.display = "block";
//   }
// }


function Toggle() {
    let contentDiv = document.getElementsByClassName("content");
    contentDiv.style.display = (contentDiv.style.display === "none" || contentDiv.style.display === "") ? "block" : "none";
}
