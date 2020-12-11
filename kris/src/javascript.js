questions = ['27 is special for a number of reasons. For one, 27 is a c____ number.',
'What element has an atomic number of 27?',
'Cobalt blue pigments have been used since ancient times for jewelry and paints. Did ancient Greeks have a word for blue?',
'Bonus: What color did Homer, ancient Greek poet, describe the sky as?',
'Which empire was known for its incendiary weapon known as Greek fire?',
'Its capital is named after the first Christian Roman Emperor. What is his name?',
"On Christianity, Thomas Bayes, father of Bayesianism, was an English Presbyterian minister. He is best known for formulating Baye's Theorem. Apply his theorem to solve the following problem:",
"We are unsure when Marie's birthday is. There is a 50% probability that today is her birthday. If her birthday is today, the probability of her eating cake is 73%. If her birthday is not today, the probability of her eating cake is 27%. What is the probability that today is Marie's birthday, if you do not see her eating cake?",
"The phrase 'Qu'ils mangent de la brioche', which roughly translates to 'Let them eat cake',  is commonly attributed to Marie Attoinette. She was notorious for her lavish lifestyle and apathy towards the common people. What happened to her?",
'What musical touches on themes of inequality and anti-monarchism?',
'Who is the antagonist in the animated film adaptation of the French fairytale La Belle et la Bete?'
]

q_genre = ['Math & Science',
'Math & Science',
'Arts & Culture',
'Arts & Culture',
'History & Geography',
'History & Geography',
'Math & Science',
'Math & Science',
'History & Geography',
'Arts & Culture',
'Arts & Culture'
]

ans = ['cubed',
'cobalt',
'no',
'bronze',
'byzantine',
'constantine',
'',
'27%',
'beheaded',
'les miserables',
'gaston'
]

img = ['q1.png',
'q2.png',
'q3.png',
'q3.png',
'q4.jpg',
'q5.jpg',
'q6.jpg',
'q6.jpg',
'q7.jpg',
'q8.jpg',
'q9.jpg']

q3 = [
    'Extinct species of archaic humans',
    'Important discovery by early humans',
    'Prehistoric fish',
    'Wooly creature',
    'Large majestic tombs',
    'Important human invention',
    'Terrible lizard',
    '________ Park',
    'Measure of distance'
]

ans3 = [
    'neanderthal',
    'fire',
    'megalodon',
    'mammoth',
    'pyramid',
    'wheel',
    'dinosaur',
    'jurassic',
    'mile'
]

var i = 0;

const port1_intro = () => {
    //e.preventDefault();
    const greetings = document.getElementById("greetings");
    greetings.innerHTML = 'Welcome to the World of Europe';
    const canvas = document.getElementById("canvas");
    canvas.innerHTML = "";
    const parent = document.createElement('div');
    parent.setAttribute("id", "intro");
    //think bout how to align the image    
    parent.innerHTML = "<img src = 'src/img/port1_intro.jpg'  style='float:left; width:250px'> Europe, the world's second smallest continent, is home to many world-renowned scientists, mathematicians, musicians and artists. A continent full of culture and heritage, Europe is a favorite tourist destination among travellers. As you continue your journey, be immersed in the many dimensions of Europe. Bon Voyage and enjoy your journey!"
    var button = document.createElement('div');
    button.setAttribute("id", "cont");
    button.innerHTML = "Continue >";
    parent.appendChild(button);
    canvas.appendChild(parent);
    document.getElementById("cont").onclick = function() {port1()};

    
}  


const port1 = () => {
    //e.preventDefault();
    const greetings = document.getElementById("greetings");
    greetings.innerHTML = '';
    const canvas = document.getElementById("canvas");
    canvas.innerHTML = '';
    const parent = document.createElement('div');
    parent.setAttribute("id", "questions");    
    var genre = document.createElement('div');
    genre.setAttribute("id", "genre");
    genre.innerHTML = q_genre[i]
    parent.appendChild(genre);
    var q = document.createElement('div');
    q.setAttribute("id", "q");
    q.innerHTML = "<img src = 'src/img/"+img[i]+"'  style='float:right; width:200px'>" + questions[i];
    parent.appendChild(q);
    if (i !=6){
    var form = document.createElement('form');
    form.setAttribute("id", "form");
    parent.appendChild(form);
    var input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "answer");
    parent.appendChild(input);
    var submit = document.createElement('input');
    submit.setAttribute("id", "submit");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    parent.appendChild(submit);

    canvas.appendChild(parent);

    var submitted_answer;
    answer = ans[i];
    document.getElementById("submit").onclick = function() {sub_ans()};

    }

    else{
        var button = document.createElement('div');
        button.setAttribute("id", "continue");
        button.innerHTML = "Continue >";
        parent.appendChild(button);
        canvas.appendChild(parent);

        document.getElementById("continue").onclick = function() {port1()};
        
  
    }


    i=i+1;
    

}

const sub_ans = () => {
    //e.preventDefault();
    
    const input = document.querySelector('#answer');
    submitted_answer = input.value;
    submitted_answer = submitted_answer.toLowerCase();
    input.value = '';
    if (submitted_answer == answer){
        try {
            document.getElementById("action").remove()    
            
        }
        catch {}
        document.getElementById("answer").remove();
        document.getElementById("submit").remove();
        var action = document.createElement('div');
        action.setAttribute("id", "action");
        
        if (i!=11) {
        var button = document.createElement('div');
        button.setAttribute("id", "continue");
        button.innerHTML = "Continue >";
        action.appendChild(button);
        canvas.appendChild(action);
        document.getElementById("continue").onclick = function() {port1()};
        }
        else {
            var clue = document.createElement('div');
            clue.setAttribute("id", "clue");
            clue.innerHTML = "You've unlocked the first clue: Gaston!";
            action.appendChild(clue);
            var home = document.createElement('div');
            home.setAttribute("id", "home");
            home.innerHTML = "Home";
            action.appendChild(home);
            canvas.appendChild(action);

            document.getElementById("home").onclick = function() {refresh()};

        }
      
    }
    else {   
        try {
            document.getElementById("action").remove()    
            //console.log('here')
        
        }
        catch {}
        var action = document.createElement('div');
        action.setAttribute("id", "action");
        var wrong = document.createElement('div');
        wrong.setAttribute("id", "wrong");
        wrong.innerHTML = "Wrong. Try again!";
        action.appendChild(wrong);
        canvas.appendChild(action);
 }

}  


const sub_ans1 = () => {
    //e.preventDefault();
    
    const input = document.querySelector('#answer');
    submitted_answer = input.value;
    submitted_answer = submitted_answer.toLowerCase();
    input.value = '';
    if (submitted_answer == answer){
        try {
            document.getElementById("action3").remove()    
            
        }
        catch {}
        document.getElementById("answer").remove();
        document.getElementById("submit").remove();
        var action = document.createElement('div');
        action.setAttribute("id", "action3");
        
        if (i!=9) {
        var button = document.createElement('div');
        button.setAttribute("id", "continue3");
        button.innerHTML = "Continue >";
        action.appendChild(button);
        canvas.appendChild(action);
        document.getElementById("continue3").onclick = function() {port3()};
        }
        else {
            var clue = document.createElement('div');
            clue.setAttribute("id", "clue");
            clue.innerHTML = "You've unlocked the final clue: Jurassic Mile!";
            action.appendChild(clue);
            var home = document.createElement('div');
            home.setAttribute("id", "home3");
            home.innerHTML = "Home";
            action.appendChild(home);
            canvas.appendChild(action);

            document.getElementById("home3").onclick = function() {refresh()};

        }
      
    }
    else {   
        try {
            document.getElementById("action3").remove()    
            //console.log('here')
        
        }
        catch {}
        var action = document.createElement('div');
        action.setAttribute("id", "action3");
        var wrong = document.createElement('div');
        wrong.setAttribute("id", "wrong");
        wrong.innerHTML = "Wrong. Try again!";
        action.appendChild(wrong);
        canvas.appendChild(action);
 }

}  


const refresh = () => {
    location.reload();

}

const port2_intro = () => {
    //e.preventDefault();
    const greetings = document.getElementById("greetings");
    greetings.innerHTML = 'Welcome to the World of Marvel & Wonder';
    const canvas = document.getElementById("canvas");
    canvas.innerHTML = "";
    const parent = document.createElement('div');
    parent.setAttribute("id", "intro");    
    parent.innerHTML = "<img src = 'src/img/port2_intro.jpg'  style='float:left; width:250px'>Some are born great, some achieve greatness, and some have greatness thrust upon them. Heroes exist in every one of us. As you continue your journey, go on a path of introspection and unleash your inner hero. Onward and Upward!"
    var button = document.createElement('div');
    button.setAttribute("id", "cont");
    text = "Continue >".link('https://ucirvine-my.sharepoint.com/:f:/g/personal/ngrs_ad_uci_edu/Eo6xBIm_3dVFqwxF3pbBpUUBcvcA1m38xR6LtIZz0Lybxw?e=WbDDBv')
    button.innerHTML = text;
    parent.appendChild(button);
    canvas.appendChild(parent);

    
}  

const port3_intro = () => {
    //e.preventDefault();
    const greetings = document.getElementById("greetings");
    greetings.innerHTML = 'Welcome to the World Before Time';
    const canvas = document.getElementById("canvas");
    canvas.innerHTML = "";
    const parent = document.createElement('div');
    parent.setAttribute("id", "intro");
    //think bout how to align the image    
    parent.innerHTML = "<img src = 'src/img/port3_intro.jpg'  style='float:left; width:250px'> We all have our time machines. Some take us back, they're called memories. Some take us forward, they're called dreams. As you continue your journey, experience the forward and backward flow of time. Deploy the temporal pincer movement!"
    var button = document.createElement('div');
    button.setAttribute("id", "cont");
    button.innerHTML = "Continue >";
    parent.appendChild(button);
    canvas.appendChild(parent);
    document.getElementById("cont").onclick = function() {port3()};

    
}  

const port3 = () => {
    //e.preventDefault();
    const greetings = document.getElementById("greetings");
    greetings.innerHTML = '';
    const canvas = document.getElementById("canvas");
    canvas.innerHTML = '';
    const parent = document.createElement('div');
    parent.setAttribute("id", "questions3");   
    parent.innerHTML = "<img src = 'src/img/p3q.png' class='center' style='width:80%'>" //insert image of word search puzzle 
    var q = document.createElement('div');
    q.setAttribute("id", "q");
    q.innerHTML = q3[i];
    parent.appendChild(q);
    var form = document.createElement('form');
    form.setAttribute("id", "form");
    parent.appendChild(form);
    var input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "answer");
    parent.appendChild(input);
    var submit = document.createElement('input');
    submit.setAttribute("id", "submit");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    parent.appendChild(submit);

    canvas.appendChild(parent);

    var submitted_answer;
    answer = ans3[i];
    document.getElementById("submit").onclick = function() {sub_ans1()};

    

    i=i+1;
    

}

document.getElementById("portal1").onclick = function() {port1_intro()};
document.getElementById("portal2").onclick = function() {port2_intro()};
document.getElementById("portal3").onclick = function() {port3_intro()};

