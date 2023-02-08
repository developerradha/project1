//Challenge 1 : Your Age in days


function radha()
        {
            var birthYear=prompt("Enter your birth year : ")
            var ageInDays=(2022-birthYear)*360;
            if(ageInDays>1800)
            {
                document.getElementById('flex-box-result').innerHTML="your age in days is : "+ ageInDays + " days"
            }
            else
            {
                document.getElementById('flex-box-result').innerHTML="Invalid Date of birth"
            }
        }

function reset(){
    document.getElementById('radha').remove();
}
        
/*
function radha(){
    var birthYear = prompt("Enter year when you born.....");
    var radha = (2022-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+radha+' days old.');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild[h1];
}*/