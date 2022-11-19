Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img"src="'+data_uri+'">';


    })

}
console.log('ml5',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ixeHOegdU',modelLoaded);
function modelLoaded(){
    console.log("teachable machine working");
}
function check(){
    img=document.getElementById("img");
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
if(error){
   console.error(error);
}
else{
    console.log(result);
    document.getElementById("resultobjectname").innerHTML=result[0].label;
    document.getElementById("resultobjectaccuracy").innerHTML=result[0].confidence.toFixed(2);
}
}
