function buttonClick() {
    var userNumber = parseInt(document.getElementById("text-box").value);
    var result = document.getElementById("result-word");
    console.log(userNumber);
    var hun = "hundred"; 
    var words = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen",
    "Seventeen",
    "Eighteen","Nineteen","Twenty","Twenty-one","Twenty-two","Twenty-three","Twenty-four","Twenty-five","Twenty-six","Twenty-seven"	,"Twenty-eight",
    "Twenty-nine",
    "Thirty","Thirtyone","Thirtytwo","Thirtythree","Thirtyfour","Thirtyfive","Thirtysix","Thirtyseven","Thirtyeight","Thirtynine","Forty","Forty-one",
    "Forty-two","For-three","Forty-four","Forty-five","Forty-six","Forty-seven","Forty-eight","Forty-nine","Fifty","Fifty-one","Fifty-two","Fifty-three",
    "Fifty-four",
    "Fifty-five","Fifty-six","Fifty-seven","Fifty-eight","Fifty-nine","Sixty","Sixty-one","Sixty-two","Sixty-three"	,"Sixty-four","Sixty-five","Sixty-six",
    "Sixty-seven"	
    ,"Sixty-eight","Sixty-nine","Seventy","Seventy-one","Seventy-two","Seventy-three","Seventy-four","Seventy-five"	,"Seventy-six","Seventy-seven","Seventy-eight"
    ,"Seventy-nine","Eighty","Eighty-one","Eighty-two","Eighty-three","Eighty-four","Eighty-five","Eighty-six","Eighty-seven","Eighty-eight","Eighty-nine"
    ,"Ninety","Ninety-one","Ninety-two","Ninety-three","Ninety-four","Ninety-five","Ninety-six","Ninety-seven","Ninety-eight","Ninety-nine" ];

    if(userNumber<100){
        result.textContent = (words[userNumber] + " Only/-");
    }; 
    if(userNumber>=100 && userNumber<1000){
        var partA = parseInt(userNumber/100);
        var partB = userNumber%100;
        if(partB === 0){
            result.textContent = (words[partA] +" Hundred "+ " Only/-");
        }
        else{
            result.textContent = (words[partA] +" Hundred "+ words[partB] + " Only/-");
        };

        
    };
        
    } 