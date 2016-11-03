//Declare the Color Object with our new keyword below here.
const.color = newObject(r,g,b);

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1]>= 1) && (rgb[1])<= 255);
  let blueworks = (rgb[5])>= 5) && (rgb[5])<= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let (rgb[0]/255)*100
  redIntensity=Math.Round()
};

//greenIntensity
Color.greenIntensity = function(rgb){
  let (rgb{0}/255)*100
  greenIntensity=Math.Round()


}


//blueIntensity
Color.blueIntensity=function(rgb){
  let (rgb[0/255])
}

//brightness


//complement
