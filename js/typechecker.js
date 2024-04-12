const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;

const typesizeTag = document.querySelector(`input[name="typesize"]`);
const typesizeOutput = document.querySelector("span.typesize-output");

const fontweightTag= document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output");

const lineheightTag = document.querySelector(`input[name="lineheight"]`);
const lineheightOutput = document.querySelector("span.lineheight-output");

const typefaceTag = document.querySelector(`select[name="typeface"]`);

const italicTag = document.querySelector(`input[name="italic"]`);

const colorTags = document.querySelectorAll("div.colors div");



//when I type in in my sentenceTag, outputTag will be updated accordingly
//if sentenceTag is empty, put original text from HTML
sentenceTag.addEventListener("keyup",function(){
	if(this.value){
     	outputTag.value = this.value;
     }else{
       outputTag.value = originalText;
     }
})
//when i type in output tag update sentencetag
outputTag.addEventListener("keyup",function(){
    	sentenceTag.value = this.value;
  		
  })

//when i change typesize slider, update the text next to it and
//change output's fontsize
typesizeTag.addEventListener("input",function(){
  outputTag.style.fontSize = this.value + "px";
  typesizeOutput.innerHTML = this.value + "px";
})

//Changing lineheight slider
lineheightTag.addEventListener("input",function(){
  outputTag.style.lineHeight = this.value;
  lineheightOutput.innerHTML = this.value;
})

//checking or unchecking checkbox
italicTag.addEventListener("change",function(){
  if(this.checked){
     outputTag.style.fontStyle = "italic";
     }else{
       outputTag.style.fontStyle = "normal";
     }
})

//changing typeface
typefaceTag.addEventListener("input", function(){
  outputTag.style.fontFamily = this.value;
})

//changing fontweight
fontweightTag.addEventListener("input",function(){
  outputTag.style.fontWeight = this.value;
  fontweightOutput.innerHTML = this.value;
})


//go through all my color tags
///when i click one of them change background-color & text color & make tag be selected
colorTags.forEach( tag =>{
  tag.addEventListener("click", function(){
    outputTag.style.backgroundColor = this.style.backgroundColor;
    outputTag.style.color = this.style.color;
    
    //reset clases
    colorTags.forEach(tag=>{
      tag.classList.remove("selected")
    })
    
    //only to this clicked one
    this.classList.add("selected")
  })
})


