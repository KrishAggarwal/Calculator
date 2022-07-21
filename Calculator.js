// //for greeting message//
// const hours = new Date().getHours();
// if (hours >= 6 && hours <= 11)
//   document.getElementById("greetText").innerHTML =
//     "Good Morning, Have a good day";
// else if (hours > 11 && hours <= 16)
//   document.getElementById("greetText").innerHTML = "Good Afternoon";
// else if (hours > 16 && hours <= 21)
//   document.getElementById("greetText").innerHTML = "Good Evening";
// else document.getElementById("greetText").innerHTML = "Good Night";
// //Changing theme//
// function day() {
//   document.getElementById("theme").href = "darkCalculator.css";
//   document.getElementById("night").style.display = "block";
//   document.getElementById("day").style.display = "none";
//   document.getElementById("emoji").style.visibility = "hidden";
// }
// //changing theme//
// function night() {
//   document.getElementById("theme").href = "Calculator.css";
//   document.getElementById("night").style.display = "none";
//   document.getElementById("day").style.display = "block";
//   document.getElementById("emoji").style.visibility = "hidden";
// }

// var string = "";
// var ans = "";
// var checkDecimal = "";
// const storage=new Array(5);

// for(let i=0;i<storage.length;i++)console.log(storage[i]);
// const input = document.getElementById("output");
// // document.addEventListener("click",()=>{

// // })
// document.addEventListener("keyup", (e) => {
//   //handle backspace/ delete case

//   if (e.key == "Backspace") {
//     //string = input.value;
//     string = string.slice(0, -1);
//     input.value = string;
//   }
//   if (e.key == "Delete") {
//     string = "";
//     input.value = "";
//   }
// });
// //handle all other inputs by keyboard event
// document.addEventListener("keypress", (e) => {
//   // console.log(e);
//   //  set
//   //checking numbers
//   if (e.key >= "0" && e.key <= "9") {
//     string += e.key;
//     input.value = string;
//     // console.log(e.target.value + "a");
//   }
//   //checking operators
//   else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
//     console.log("Checking" + string);
//     console.log(string[string.length - 1]);
//     //checking if user is typing consecutive operators
//     if (
//       string[string.length - 1] != "+" &&
//       string[string.length - 1] != "-" &&
//       string[string.length - 1] != "*" &&
//       string[string.length - 1] != "/"
//     ) {
//       console.log("added");
//       string = string + e.key;
//       checkDecimal = "";
//       input.value = string;
//       // string = document.getElementById("output").value;
//       console.log("final" + string);
//     } else {
//       console.log("Adding Second operator");
//       // console.log(typeof string);
//       //input.value = parseInt(string);

//       setTimeout(() => {
//         input.value = string;
//       }, 1);

//       // document.getElementById("output").value =input.value;
//       // string=parseInt(input.value);
//       // console.log("extra operator");
//     }
//   } else if ( e.key === "="||e.key === "Enter") {
//     ans = eval(string);
//     document.getElementById("calculation").value = string;
//     console.log(string+"a")
//     document.getElementById("output").value = ans;

//     string = ans;
//     document.getElementById("emoji").style.visibility = "visible";
//   } else if (e.key == ".") {
//     if (checkDecimal == "") {
//       string += e.key;
//       checkDecimal = string;
//       input.value = string;
//     } else {
//       console.log("Adding second .");
//     }
//   } else {
//     console.log("User is typing letters");

//     alert("Please enter a valid input");
//     input.value = string;
//   }

//   console.log(string);
// });

// function calculate(x) {

//   if (x == "ac") {
//     if (ans != "" && ans != undefined) {
//       //if (st != undefined) {
//       const node = document.createElement("p");
//       node.innerHTML =
//         document.getElementById("calculation").value + `<br>` + input.value;
//       document.getElementById("history").appendChild(node);
//       storage.push(document.getElementById("calculation").value + `<br>` + input.value)
//       //}
//       console.log("history");
//       console.log(string);
//       console.log(ans);
//       string = "";
//     } else {
//       console.log("Please do some Calculation First");
//     }
//     string = "";
//     document.getElementById("output").value = "";
//     document.getElementById("calculation").value = "";
//     document.getElementById("emoji").style.visibility = "hidden";
//   } else if (x == "c") {
//     string = "";
//     document.getElementById("output").value = "";
//     document.getElementById("emoji").style.visibility = "hidden";
//   } else if (x == "dlt") {
//     string = string.slice(0, -1);
//     document.getElementById("output").value = string;
//   }
//   // else if(x=='sqrt'){
//   //   let root=Math.sqrt(parseInt(string[string.length-1]));
//   //   string=string.slice(0,-1)+root;

//   // }
//   else if (x == "=") {
//     try {
//       ans = eval(string);
//       document.getElementById("emoji").style.visibility = "visible";
//       document.getElementById("calculation").value = string;
//       document.getElementById("output").value = ans;
//       string = ans;
//       console.log(ans);
//     } catch (err) {
//       document.getElementById("output").value = "Please enter valid input";
//       string = "";
//     } finally {
//       setTimeout(() => console.log(""), 2000);
//     }
//   } else {
//     //string+=x;
//     if (x >= "0" && x <= "9") {
//       string += x;
//     }
//     //checking operators
//     else if (x == "+" || x == "-" || x == "*" || x == "/") {
//       console.log("Checking" + string);
//       console.log(string[string.length - 1]);
//       //checking if user is typing consecutive operators
//       if (
//         string[string.length - 1] != "+" &&
//         string[string.length - 1] != "-" &&
//         string[string.length - 1] != "*" &&
//         string[string.length - 1] != "/"
//       ) {
//         console.log("added");
//         checkDecimal = "";
//         string += x;
//         // string = document.getElementById("output").value;
//         console.log("final" + string);
//       } else {
//         console.log("Adding Second" + string);
//         // console.log(typeof string);
//         // input.value = parseInt(string);
//         //document.getElementById("output").value = input.value;
//         // string=parseInt(input.value);
//         // console.log("extra operator");
//       }
//     } else if (x == ".") {
//       if (checkDecimal == "") {
//         string += x;
//         checkDecimal = string;
//       } else {
//         console.log("Adding second .");
//       }
//     }
//     // console.log(string);
//     document.getElementById("output").value = string;
//   }
// }
//for greeting message//
const hours = new Date().getHours();
if (hours >= 6 && hours <= 11)
  document.getElementById("greetText").innerHTML =
    "Good Morning";
else if (hours > 11 && hours <= 16)
  document.getElementById("greetText").innerHTML = "Good Afternoon";
else if (hours > 16 && hours <= 21)
  document.getElementById("greetText").innerHTML = "Good Evening";
else document.getElementById("greetText").innerHTML = "Good Night";
//Changing theme//
function day() {
  document.getElementById("theme").href = "darkCalculator.css";
  document.getElementById("night").style.display = "block";
  document.getElementById("day").style.display = "none";
  document.getElementById('showHistory').style.color="white";
  document.getElementById("emoji").style.visibility = "hidden";
}
//changing theme//
function night() {
  document.getElementById("theme").href = "Calculator.css";
  document.getElementById("night").style.display = "none";
  document.getElementById("day").style.display = "block";
    document.getElementById("showHistory").style.color = "black";
  document.getElementById("emoji").style.visibility = "hidden";
}
//showing history
function showHistory() {
var historyIcon=document.getElementById('history')
historyIcon.style.display = "block";}

var string = "";
var ans = "";
var index = 0;
var checkDecimal = "";
var storage = new Array(5);
window.onload = () => {
  console.log(localStorage.getItem("key"))
  if(localStorage.getItem("key")){
  let historyArray = localStorage.getItem("key").split(",");
  document.getElementById("history1").innerHTML = historyArray[0].toString();
  document.getElementById("history2").innerHTML = historyArray[1].toString();
  document.getElementById("history3").innerHTML = historyArray[2].toString();
  document.getElementById("history4").innerHTML = historyArray[3].toString();
  document.getElementById("history5").innerHTML = historyArray[4].toString();
  }
};
// function keyInput(){
//   const regex=/^[0-9]{1,}$/;
//   var keypress = document.getElementById("input").value;
//   if ((regex).test(keypress))
//    string = 'jrewhjtl';

//   // else {
//     //string = string.slice(0, -1);
//     // document.getElementById("output").value = string;
//   // };
//   console.log(string)
// }

const input = document.getElementById("output");
// document.addEventListener("click",()=>{

// })
document.addEventListener("keyup", (e) => {
  //handle backspace/ delete case

  if (e.key == "Backspace") {
    //string = input.value;
    string = string.slice(0, -1);
    input.value = string;
  }
  if (e.key == "Delete") {
    string = "";
    input.value = "";
  }
});
//handle all other inputs by keyboard event
document.addEventListener("keypress", (e) => {
  // console.log(e);
  //  set
  //checking numbers
  if (e.key >= "0" && e.key <= "9") {
    string += e.key;
    input.value = string;
    // console.log(e.target.value + "a");
  }
  //checking operators
  else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
    console.log("Checking" + string);
    console.log(string[string.length - 1]);
    //checking if user is typing consecutive operators
    if (
      string[string.length - 1] != "+" &&
      string[string.length - 1] != "-" &&
      string[string.length - 1] != "*" &&
      string[string.length - 1] != "/"
    ) {
      console.log("added");
      checkDecimal = "";
      string = string + e.key;
      input.value = string;
      // string = document.getElementById("output").value;
      console.log("final" + string);
    } else {
      console.log("Adding Second operator");
      // console.log(typeof string);
      //input.value = parseInt(string);

      setTimeout(() => {
        input.value = string;
      }, 1);

      // document.getElementById("output").value =input.value;
      // string=parseInt(input.value);
      // console.log("extra operator");
    }
  } else if (e.key === "Enter") {
    ans = eval(string);
    document.getElementById("calculation").value = string;
    document.getElementById("output").value = ans;
    storage.push(string + ": " + ans);
    storage.shift();
    // console.log(storage)
    localStorage.setItem("key", storage);
    string = ans;
    document.getElementById("emoji").style.visibility = "visible";
  } else if (e.key == ".") {
    if (checkDecimal == "") {
      string += e.key;
      checkDecimal = string;
      input.value = string;
    } else {
      console.log("Adding second .");
    }
  } else {
    console.log("User is typing letters");

    alert("Please enter a valid input");
    input.value = string;
  }

  console.log(string);
});

function calculate(x) {
  document.getElementById("output").type = "text";
  if (x == "ac") {
    if (ans != "" && ans != undefined) {
      // for(let i=0;i<storage.length;++i) {
      // console.log(localStorage.getItem(`${storage[i]}`))
      // node.innerHTML =localStorage.getItem(`${storage[i]}`);
      // document.getElementById("history").appendChild(node);

      // }

      let historyArray = localStorage.getItem("key").split(",");
      // let node=document.createElement('p').setAttribute("class", "historyPara");
      // node.innerHTML = historyArray[historyArray.length - 1];
      // document.getElementById("history").appendChild(node);

      document.getElementById("history1").innerHTML =
        historyArray[0].toString();
      document.getElementById("history2").innerHTML =
        historyArray[1].toString();
      document.getElementById("history3").innerHTML =
        historyArray[2].toString();
      document.getElementById("history4").innerHTML =
        historyArray[3].toString();
      document.getElementById("history5").innerHTML =
        historyArray[4].toString();

      console.log(
        "last calculation is = " + historyArray[historyArray.length - 1]
      );
      console.log("history");
      console.log(string);
      console.log(ans);
      string = "";
      ans = "";
    } else {
      console.log("Please do some Calculation First");
    }
    string = "";
    document.getElementById("output").value = "";
    document.getElementById("calculation").value = "";
    document.getElementById("emoji").style.visibility = "hidden";
  } else if (x == "c") {
    string = "";
    document.getElementById("output").value = "";
    document.getElementById("emoji").style.visibility = "hidden";
  } else if (x == "dlt") {
    string = string.slice(0, -1);
    document.getElementById("output").value = string;
  }
  // else if(x=='sqrt'){
  //   let root=Math.sqrt(parseInt(string[string.length-1]));
  //   string=string.slice(0,-1)+root;

  // }
  else if (x == "=") {
    try {
      ans = eval(string);
      document.getElementById("emoji").style.visibility = "visible";
      document.getElementById("calculation").value = string;
      document.getElementById("output").value = ans;
      localStorage.setItem(
        `${storage[index]}`,
        storage.push(string + "=" + ans)
      );
      string = ans;
      index++;
      console.log(ans);
    } catch (err) {
      document.getElementById("output").value = "Please enter valid input";
      string = "";
    }
  } else {
    //string+=x;
    if (x >= "0" && x <= "9") string += x;
    //checking operators
    else if (x == "+" || x == "-" || x == "*" || x == "/") {
      console.log("Checking" + string);
      console.log(string[string.length - 1]);
      //checking if user is typing consecutive operators
      if (
        string[string.length - 1] != "+" &&
        string[string.length - 1] != "-" &&
        string[string.length - 1] != "*" &&
        string[string.length - 1] != "/"
      ) {
        console.log("added");
        checkDecimal = "";
        string += x;
        // string = document.getElementById("output").value;
        console.log("final" + string);
      } else if (x == ".") {
        if (checkDecimal == "") {
          string += x;
          checkDecimal = string;
          input.value = string;
        } else {
          console.log("Adding second .");
        }
      } else {
        console.log("Adding Second" + string);
        // console.log(typeof string);
        // input.value = parseInt(string);
        //document.getElementById("output").value = input.value;
        // string=parseInt(input.value);
        // console.log("extra operator");
      }
    }
    // console.log(string);
    document.getElementById("output").value = string;
  }
}
