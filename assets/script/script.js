function convertPixels(px) {
    const points = px * 0.75; // 1pt = 0.75px
    const inches = px * 0.013889; // 1in = 96px = 96/72pt = 0.013889in
    // const meters = px * 0.00026458; // 1m = 3779.527559px
    const centimeters = px * 0.026458; // 1cm = 37.79527559px
    const milimeters = px * 0.264583333; // 1px = 0.264583333mm
    const rems = px * 0.0625; // 1rem = 16px
    const viewportUnits = px * 0.01; // 1vw/vh = 100px
    const ems = px * 0.0625; // 1em = 16px
    const picas = px * 0.0625; // 1picas=16px
   
    if (document.querySelector(".card-footer").classList.contains("d-none")) {
     document.querySelector(".card-footer").classList.remove("d-none");
    }
    document.querySelector("#points").value = points.toFixed(2) + "pt";
    document.querySelector("#percentages").value = viewportUnits.toFixed(2) + "%";
    document.querySelector("#inches").value = inches.toFixed(2) + "in";
    document.querySelector("#em").value = ems.toFixed(2) + "em";
    document.querySelector("#rem").value = rems.toFixed(2) + "rem";
    document.querySelector("#cm").value = centimeters.toFixed(2) + "cm";
    document.querySelector("#mm").value = milimeters.toFixed(2) + "mm";
    document.querySelector("#picas").value = picas.toFixed(2) + "pc";
   }
   function tapToCopy(text) {
    navigator.clipboard.writeText(text);
   }
   