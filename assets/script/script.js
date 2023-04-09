function convertPixels(px) {
 const points = px * 0.75; // 1pt = 0.75px
 const inches = px * 0.013889; // 1in = 96px = 96/72pt = 0.013889in
 // const meters = px * 0.00026458; // 1m = 3779.527559px
 const centimeters = px * 0.026458; // 1cm = 37.79527559px
 const milimeters = px * 0.264583333; // 1px = 0.264583333mm
 const rems = px * 0.01; // 1rem = 100px
 const viewportUnits = px * 0.01; // 1vw/vh = 100px
 const ems = px * 0.0625; // 1em = 16px
 const picas = px * 0.0625; // 1picas=16px

 if (document.querySelector(".card-footer").classList.contains("d-none")) {
  document.querySelector(".card-footer").classList.remove("d-none");
 }
 document.querySelector("#points").value = points + "pt";
 document.querySelector("#percentages").value = viewportUnits + "%";
 document.querySelector("#inches").value = inches + "in";
 document.querySelector("#em").value = ems + "em";
 document.querySelector("#rem").value = rems + "rem";
 document.querySelector("#cm").value = centimeters + "cm";
 document.querySelector("#mm").value = milimeters + "mm";
 document.querySelector("#picas").value = picas + "pc";
}
function tapToCopy(text) {
 navigator.clipboard.writeText(text);
}
