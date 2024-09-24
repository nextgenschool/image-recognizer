
Webcam.attach( '#camera' );

camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(date_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('m15 version:', m15.version):

  // Initialize the Image Classifier method with mobileNet
  //Classifer = m15.imageClassifer('https://teachablemachine.withgoogle.com/models/JACKTMciY/model.json',modelLoaded);
  classifer = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.jso',modelLoaded);

  //when the model is loaded
  function modelLOADED() {
    console.log('model Loaded');
  }

  function.check()
{
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}


// A function to run when we get any error and the result 
function gotResult(error, results) {
    //Display error in the console
    if (error) {
        concole.error(error);
    } else {
        // The results are in an array ordered by confidence.
        concole.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
