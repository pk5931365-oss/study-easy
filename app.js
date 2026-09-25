const exams = [
 {id:"NEET",name:"NEET",desc:"Biology • Chemistry • Physics"},
 {id:"JEE",name:"JEE Main",desc:"Physics • Chemistry • Mathematics"},
 {id:"JEE_ADV",name:"JEE Advanced",desc:"Advanced PCM practice"},
 {id:"CDS",name:"CDS",desc:"English • GK • Maths"},
 {id:"NDA",name:"NDA",desc:"Maths • GAT"},
 {id:"UPSC",name:"UPSC CSE",desc:"GS • CSAT"},
 {id:"RAILWAY",name:"Railway",desc:"Maths • Reasoning • GK"},
 {id:"SSC",name:"SSC",desc:"Quant • Reasoning • English • GK"}
];

const questions = [
 {exam:"CDS",level:"Easy",q:"Which article of the Constitution deals with equality before law?",o:["Article 14","Article 19","Article 21","Article 32"],a:0,e:"Article 14 guarantees equality before law and equal protection of laws."},
 {exam:"CDS",level:"Medium",q:"The Battle of Plassey was fought in which year?",o:["1757","1761","1857","1773"],a:0,e:"The Battle of Plassey took place in 1757."},
 {exam:"CDS",level:"Hard",q:"Which type of sentence contains two independent clauses joined by a coordinating conjunction?",o:["Simple","Compound","Complex","Interrogative"],a:1,e:"A compound sentence has two independent clauses joined by a coordinating conjunction or suitable punctuation."},
 {exam:"NDA",level:"Easy",q:"What is the SI unit of force?",o:["Joule","Newton","Watt","Pascal"],a:1,e:"Force is measured in newtons (N)."},
 {exam:"NDA",level:"Medium",q:"If a body moves with constant velocity, its acceleration is:",o:["Zero","Constant non-zero","Increasing","Decreasing"],a:0,e:"Constant velocity means no change in velocity, so acceleration is zero."},
 {exam:"NDA",level:"Hard",q:"For a projectile launched and landing at the same level, maximum range occurs at what angle (ignoring air resistance)?",o:["30°","45°","60°","90°"],a:1,e:"Range is maximum at 45° for ideal projectile motion."},
 {exam:"UPSC",level:"Easy",q:"Who is the constitutional head of the Union executive in India?",o:["Prime Minister","President","Chief Justice","Speaker"],a:1,e:"The President is the constitutional head of the Union executive."},
 {exam:"UPSC",level:"Medium",q:"Which institution is the final interpreter of the Constitution?",o:["Parliament","Supreme Court","Election Commission","CAG"],a:1,e:"The Supreme Court has the final authority to interpret the Constitution."},
 {exam:"UPSC",level:"Hard",q:"The basic structure doctrine is associated with which landmark case?",o:["Kesavananda Bharati","Maneka Gandhi","Golaknath","Minerva Mills only"],a:0,e:"The basic structure doctrine was established in Kesavananda Bharati v. State of Kerala (1973)."},
 {exam:"SSC",level:"Easy",q:"What is 15% of 200?",o:["15","20","30","40"],a:2,e:"15/100 × 200 = 30."},
 {exam:"SSC",level:"Medium",q:"Choose the correctly spelt word.",o:["Accomodate","Acommodate","Accommodate","Accomadate"],a:2,e:"The correct spelling is Accommodate."},
 {exam:"SSC",level:"Hard",q:"If the average of five consecutive integers is 24, what is the largest integer?",o:["24","25","26","27"],a:2,e:"The middle integer is 24, so the sequence is 22, 23, 24, 25, 26."},
 {exam:"RAILWAY",level:"Easy",q:"Which planet is known as the Red Planet?",o:["Venus","Mars","Jupiter","Mercury"],a:1,e:"Mars appears reddish because of iron-rich minerals on its surface."},
 {exam:"RAILWAY",level:"Medium",q:"A train covers 120 km in 2 hours. Its average speed is:",o:["40 km/h","50 km/h","60 km/h","80 km/h"],a:2,e:"Speed = distance/time = 120/2 = 60 km/h."},
 {exam:"RAILWAY",level:"Hard",q:"If the ratio of two numbers is 3:5 and their sum is 64, the larger number is:",o:["24","32","40","48"],a:2,e:"8 parts = 64, so one part = 8 and the larger number = 5×8 = 40."},
 {exam:"NEET",level:"Easy",q:"The basic unit of life is the:",o:["Tissue","Organ","Cell","Atom"],a:2,e:"The cell is the basic structural and functional unit of life."},
 {exam:"NEET",level:"Medium",q:"Which molecule carries genetic information in most organisms?",o:["ATP","DNA","Glucose","Lipid"],a:1,e:"DNA stores hereditary genetic information in most organisms."},
 {exam:"NEET",level:"Hard",q:"Which phase of the cell cycle includes DNA replication?",o:["G1","S","G2","M"],a:1,e:"DNA replication occurs during the S (synthesis) phase."},
 {exam:"JEE",level:"Easy",q:"The derivative of x² with respect to x is:",o:["x","2x","x²","2"],a:1,e:"d(x²)/dx = 2x."},
 {exam:"JEE",level:"Medium",q:"If a vector has magnitude 5 and is doubled, its new magnitude is:",o:["5","7","10","25"],a:2,e:"Multiplying a vector by 2 doubles its magnitude."},
 {exam:"JEE",level:"Hard",q:"For a quadratic ax²+bx+c=0 to have equal real roots, its discriminant must be:",o:[">0","<0","=0","=1"],a:2,e:"Equal real roots occur when b²−4ac = 0."},
 {exam:"JEE_ADV",level:"Easy",q:"Which particle has a negative electric charge?",o:["Proton","Electron","Neutron","Photon"],a:1,e:"The electron carries negative charge."},
 {exam:"JEE_ADV",level:"Medium",q:"The dot product of two perpendicular vectors is:",o:["1","-1","0","Their magnitudes multiplied"],a:2,e:"A·B = AB cos 90° = 0."},
 {exam:"JEE_ADV",level:"Hard",q:"For an ideal gas undergoing an isothermal process, which quantity remains constant?",o:["Pressure","Temperature","Volume","Internal energy only"],a:1,e:"An isothermal process occurs at constant temperature."}
];

let selectedExam=null, selectedLevel=null, quiz=[], idx=0, score=0, chosen=null, timerId=null, timeLeft=60;
const state=JSON.parse(localStorage.getItem("studyEasyState")||'{"attempts":0,"correct":0,"streak":0,"history":[],"premium":false}');
function save(){localStorage.setItem("studyEasyState",JSON.stringify(state));}
function show(id){
 document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 if(id==="progress") renderProgress();
 window.scrollTo(0,0);
}
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));
document.getElementById("premiumBtn").onclick=()=>show("premium");

document.getElementById("examList").innerHTML=exams.map(e=>`<button class="exam" data-exam="${e.id}"><b>${e.name}</b><span>${e.desc} →</span></button>`).join("");
document.querySelectorAll(".exam").forEach(b=>b.onclick=()=>{selectedExam=b.dataset.exam;document.getElementById("levelTitle").textContent=exams.find(e=>e.id===selectedExam).name+" • Difficulty";show("levels")});
document.querySelectorAll(".level").forEach(b=>b.onclick=()=>startQuiz(selectedExam,b.dataset.level,10));

function startQuiz(exam,level,count){
 let pool=questions.filter(x=>x.exam===exam&&x.level===level);
 if(pool.length===0) pool=questions.filter(x=>x.level===level);
 quiz=shuffle(pool).slice(0,Math.min(count,pool.length));
 if(quiz.length===0){alert("More questions will be added to this exam soon.");return}
 idx=0;score=0;chosen=null;timeLeft=60;show("quiz");renderQuestion();startTimer();
}
function startMixed(count){
 quiz=shuffle(questions).slice(0,count);idx=0;score=0;chosen=null;timeLeft=90;show("quiz");renderQuestion();startTimer();
}
function renderQuestion(){
 const q=quiz[idx];chosen=null;
 document.getElementById("quizMeta").textContent=`${idx+1}/${quiz.length} • ${q.level}`;
 document.getElementById("question").textContent=q.q;
 document.getElementById("quizBar").style.width=`${(idx/quiz.length)*100}%`;
 const box=document.getElementById("options");box.innerHTML="";
 q.o.forEach((opt,i)=>{const b=document.createElement("button");b.className="option";b.textContent=`${String.fromCharCode(65+i)}. ${opt}`;b.onclick=()=>selectOption(i,b);box.appendChild(b)});
 document.getElementById("nextBtn").disabled=true;
}
function selectOption(i,b){
 if(chosen!==null)return; chosen=i;b.classList.add("selected");
 document.querySelectorAll(".option").forEach((x,j)=>{if(j===quiz[idx].a)x.classList.add("correct")});
 if(i!==quiz[idx].a)b.classList.add("wrong");
 document.getElementById("nextBtn").disabled=false;
}
document.getElementById("nextBtn").onclick=()=>{
 if(chosen===quiz[idx].a)score++;
 if(idx<quiz.length-1){idx++;renderQuestion()}else finish();
};
function finish(){
 clearInterval(timerId);
 state.attempts+=quiz.length;state.correct+=score;
 state.streak+=1;
 state.history.unshift({date:new Date().toLocaleDateString(),score,total:quiz.length});
 state.history=state.history.slice(0,8);save();
 document.getElementById("score").textContent=`${score}/${quiz.length}`;
 document.getElementById("resultText").textContent=`Accuracy: ${Math.round(score/quiz.length*100)}%. Review your mistakes and practice again.`;
 show("result");
}
function startTimer(){
 clearInterval(timerId);document.getElementById("timer").textContent=`⏱ ${timeLeft}s`;
 timerId=setInterval(()=>{timeLeft--;document.getElementById("timer").textContent=`⏱ ${timeLeft}s`;if(timeLeft<=0)finish()},1000);
}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function renderProgress(){
 document.getElementById("attempts").textContent=state.attempts;
 document.getElementById("correct").textContent=state.correct;
 document.getElementById("accuracy").textContent=state.attempts?Math.round(state.correct/state.attempts*100)+"%":"0%";
 document.getElementById("streak").textContent=state.streak+" days";
 document.getElementById("streakBar").style.width=Math.min(state.streak*10,100)+"%";
 document.getElementById("history").innerHTML=state.history.length?state.history.map(h=>`<p>${h.date} — ${h.score}/${h.total}</p>`).join(""):"<p class='muted'>No attempts yet.</p>";
}
document.getElementById("dailyBtn").onclick=()=>startMixed(10);
document.getElementById("mockBtn").onclick=()=>startMixed(15);
document.getElementById("buyBtn").onclick=()=>{
 alert("Demo only: connect Google Play Billing to charge ₹50/month. Never unlock premium solely from a local button in a production app.");
};
renderProgress();
