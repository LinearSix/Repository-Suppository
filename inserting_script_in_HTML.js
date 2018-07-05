var count
count = 0
function myFunction() {
  if (count == 0) {
    document.getElementById("demo").innerHTML = "Changed Text";
    count = 1;
    console.log(demo);
    console.log(count);
  } else {
    document.getElementById("demo").innerHTML = "Original Text";
    count = 0;
    console.log(demo);
    console.log(count);
  }
}
