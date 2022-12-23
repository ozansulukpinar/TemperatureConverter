$("#fromTemperature").on('input', function () {
    callAllFunctions();
});

$("#from").change(function () {
    callAllFunctions();
});

$("#to").change(function () {
    callAllFunctions();
});

function callAllFunctions() {
    convertTemperature();
    changeBackGroundColor();
}

function convertTemperature() {
   var fromTemperature = $("#fromTemperature").val();
   var selectedFromTemperature = $("#from option:selected").val();
   var selectedToTemperature = $("#to option:selected").val();
   var toTemperature = 0;

   if (fromTemperature.length != 0) {
      if (selectedFromTemperature == selectedToTemperature) {
         toTemperature = fromTemperature;
      } else {
         switch (selectedFromTemperature) {
            case "C":
               switch (selectedToTemperature) {
                  case "F":
                     toTemperature = fromTemperature * 1.8 + 32;
                     break;
                  case "K":
                     toTemperature = fromTemperature * 1.0 + 273.15;
                     break;
                  case "R":
                     toTemperature = fromTemperature * 1.8 + 491.67;
                     break;
               }
               break;
            case "F":
               switch (selectedToTemperature) {
                  case "C":
                     toTemperature = ((fromTemperature * 1.0 - 32) * 5.0) / 9.0;
                     break;
                  case "K":
                     toTemperature = ((fromTemperature * 1.0 + 459.67) * 5.0) / 9.0;
                     break;
                  case "R":
                     toTemperature = fromTemperature * 1.0 + 459.67;
                     break;
               }
               break;
            case "K":
               switch (selectedToTemperature) {
                  case "C":
                     toTemperature = fromTemperature * 1.0 - 273.15;
                     break;
                  case "F":
                     toTemperature = (fromTemperature * 1.8) - 459.67;
                     break;
                  case "R":
                     toTemperature = fromTemperature * 1.8;
                     break;
               }
               break;
            case "R":
               switch (selectedToTemperature) {
                  case "C":
                     toTemperature = (fromTemperature * 5.0) / 9.0 - 273.15;
                     break;
                  case "F":
                     toTemperature = fromTemperature * 1.0 - 459.67;
                     break;
                  case "K":
                     toTemperature = (fromTemperature * 5.0) / 9.0;
                     break;
               }
               break;
         }
      }
    } else {
        toTemperature = "";
    }
    
    $("#toTemperature").val(toTemperature);    
}

function changeBackGroundColor() {
    $("body").css("background-color", "rgb(" + getRandomRGB() + ")");
}

function getRandomRGB() {
    var rgb = "";

    for (var i = 0; i < 3; i++){
        var random = Math.floor((Math.random() * 255) + 1);
        rgb += random;
        if (i != 2)
            rgb += ",";
    }

    return rgb;
}