function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
   classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9L_oiw_Ho/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error)
    }

    else{
        console.log(results)
        document.getElementById("animal").innerHTML=results[0].label;
        p= results[0].confidence * 100;
        document.getElementById("accu").innerHTML= p.toFixed(2) + "%"

        soundname= results[0].label
        if (soundname == "Dog Fight"){
            document.getElementById("soundimg").src="Dog Fight.jpg";
        }

        else if(soundname=="Lion Roar"){
            document.getElementById("soundimg").src="Lion.jpg";
        }

        else if(soundname=="Leopard Roar"){
            document.getElementById("soundimg").src="leopard.jpg";
        }

        else if(soundname=="Tiger Roar"){
            document.getElementById("soundimg").src="tiger.jpg";
        }

        else if(soundname=="Cheetah Bark"){
            document.getElementById("soundimg").src="cheetah.jpg";
        }

        else if(soundname=="Background Noise"){
            document.getElementById("soundimg").src="ear.png";
        }
    }
}