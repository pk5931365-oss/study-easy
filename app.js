const exams = [
 {id:"NEET",name:"NEET",desc:"Biology • Chemistry • Physics"},
 {id:"JEE",name:"JEE Main",desc:"Physics • Chemistry • Mathematics"},
 {id:"JEE_ADV",name:"JEE Advanced",desc:"Advanced PCM practice"},
 {id:"CDS",name:"CDS",desc:"English • GK • Maths"},
 {id:"NDA",name:"NDA",desc:"Maths • GAT"},
 {id:"UPSC",name:"UPSC CSE",desc:"GS • CSAT"},
 {id:"RAILWAY",name:"Railway",desc:"Maths • Reasoning • GK"},
 {id:"SSC",name:"SSC",desc:"Quant • Reasoning • English • GK"}
 {exam:"CDS",level:"Easy",q:"Who appoints the Governor of a state in India?",o:["Prime Minister","President","Chief Minister","Chief Justice"],a:1,e:"The Governor of a state is appointed by the President of India."},
 {exam:"CDS",level:"Easy",q:"Which is the largest planet in the Solar System?",o:["Earth","Saturn","Jupiter","Neptune"],a:2,e:"Jupiter is the largest planet in the Solar System."},
 {exam:"CDS",level:"Easy",q:"What is the capital of Rajasthan?",o:["Jodhpur","Jaipur","Udaipur","Kota"],a:1,e:"Jaipur is the capital of Rajasthan."},
 {exam:"CDS",level:"Easy",q:"Which gas is most abundant in Earth's atmosphere?",o:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],a:2,e:"Nitrogen makes up about 78% of Earth's atmosphere."},
 {exam:"CDS",level:"Easy",q:"Who wrote the Indian national anthem?",o:["Bankim Chandra Chattopadhyay","Rabindranath Tagore","Sarojini Naidu","Subhas Chandra Bose"],a:1,e:"Rabindranath Tagore wrote 'Jana Gana Mana'."},
 {exam:"CDS",level:"Easy",q:"What is the currency of Japan?",o:["Won","Yuan","Yen","Ringgit"],a:2,e:"The currency of Japan is the Japanese Yen."},
 {exam:"CDS",level:"Easy",q:"Which vitamin is mainly produced in the skin through sunlight?",o:["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],a:3,e:"Sunlight helps the skin synthesize vitamin D."},
 {exam:"CDS",level:"Easy",q:"The headquarters of the United Nations is located in:",o:["Geneva","Paris","New York","London"],a:2,e:"The UN headquarters is in New York City."},
 {exam:"CDS",level:"Easy",q:"Which river is known as the 'Sorrow of Bihar'?",o:["Ganga","Kosi","Yamuna","Godavari"],a:1,e:"The Kosi River is traditionally known as the Sorrow of Bihar because of its floods."},
 {exam:"CDS",level:"Easy",q:"What is the SI unit of power?",o:["Joule","Newton","Watt","Pascal"],a:2,e:"Power is measured in watts (W)."},


 {exam:"CDS",level:"Medium",q:"Which Fundamental Right is guaranteed under Article 19?",o:["Right to Equality","Right to Freedom","Right against Exploitation","Right to Education"],a:1,e:"Article 19 guarantees several freedoms, including speech and expression."},
 {exam:"CDS",level:"Medium",q:"The Permanent Settlement was introduced by:",o:["Lord Wellesley","Lord Cornwallis","Lord Dalhousie","Lord Curzon"],a:1,e:"Lord Cornwallis introduced the Permanent Settlement in 1793."},
 {exam:"CDS",level:"Medium",q:"Which Indian state has the longest coastline?",o:["Tamil Nadu","Andhra Pradesh","Gujarat","Maharashtra"],a:2,e:"Gujarat has the longest coastline among Indian states."},
 {exam:"CDS",level:"Medium",q:"The Tropic of Cancer passes through how many Indian states?",o:["6","7","8","9"],a:2,e:"The Tropic of Cancer passes through 8 Indian states."},
 {exam:"CDS",level:"Medium",q:"Which blood group is commonly called the universal donor for red blood cells?",o:["AB+","O−","A+","B−"],a:1,e:"O-negative red blood cells are generally considered the universal donor type."},
 {exam:"CDS",level:"Medium",q:"The Green Revolution in India was mainly associated with increased production of:",o:["Tea","Wheat and rice","Cotton","Sugarcane"],a:1,e:"The Green Revolution greatly increased wheat and rice production."},
 {exam:"CDS",level:"Medium",q:"Which Constitutional Amendment reduced the voting age from 21 to 18?",o:["42nd","44th","61st","73rd"],a:2,e:"The 61st Constitutional Amendment Act, 1988, lowered the voting age to 18."},
 {exam:"CDS",level:"Medium",q:"Which layer of the atmosphere contains most weather phenomena?",o:["Stratosphere","Troposphere","Mesosphere","Thermosphere"],a:1,e:"Most weather occurs in the troposphere."},
 {exam:"CDS",level:"Medium",q:"If the speed of a body is doubled, its kinetic energy becomes:",o:["Half","Double","Four times","Eight times"],a:2,e:"Kinetic energy is proportional to the square of velocity, so doubling speed makes it four times larger."},
 {exam:"CDS",level:"Medium",q:"Choose the correct sentence:",o:["Neither of the boys are present.","Neither of the boys is present.","Neither boys is present.","Neither boys are present."],a:1,e:"'Neither' is singular and takes the singular verb 'is' in standard usage."},


 {exam:"CDS",level:"Hard",q:"Which Act introduced dyarchy in the provinces of British India?",o:["Government of India Act 1909","Government of India Act 1919","Government of India Act 1935","Indian Councils Act 1892"],a:1,e:"The Government of India Act 1919 introduced dyarchy in the provinces."},
 {exam:"CDS",level:"Hard",q:"The doctrine of lapse is most closely associated with:",o:["Lord Ripon","Lord Curzon","Lord Dalhousie","Lord Canning"],a:2,e:"Lord Dalhousie extensively applied the Doctrine of Lapse."},
 {exam:"CDS",level:"Hard",q:"Which Schedule of the Constitution deals with the allocation of seats in the Rajya Sabha?",o:["Third Schedule","Fourth Schedule","Fifth Schedule","Seventh Schedule"],a:1,e:"The Fourth Schedule deals with allocation of seats in the Council of States (Rajya Sabha)."},
 {exam:"CDS",level:"Hard",q:"In economics, a situation where general prices continuously fall is called:",o:["Inflation","Stagflation","Deflation","Reflation"],a:2,e:"Deflation refers to a sustained decline in the general price level."},
 {exam:"CDS",level:"Hard",q:"Which writ is issued to produce a person who has been unlawfully detained?",o:["Mandamus","Certiorari","Habeas Corpus","Quo Warranto"],a:2,e:"Habeas Corpus is used to challenge unlawful detention."},
 {exam:"CDS",level:"Hard",q:"If the radius of a sphere is doubled, its volume becomes:",o:["2 times","4 times","6 times","8 times"],a:3,e:"Volume of a sphere is proportional to r³, so doubling the radius gives 8 times the volume."},
 {exam:"CDS",level:"Hard",q:"Which part of the brain is primarily responsible for maintaining posture and balance?",o:["Cerebrum","Cerebellum","Medulla","Hypothalamus"],a:1,e:"The cerebellum plays a major role in coordination, posture and balance."},
 {exam:"CDS",level:"Hard",q:"Which of the following pairs is incorrectly matched?",o:["Narmada — Rift valley river","Godavari — Dakshin Ganga","Mahanadi — Odisha","Luni — Arabian Sea"],a:3,e:"The Luni does not reach the Arabian Sea; it drains into the Rann of Kutch."},
 {exam:"CDS",level:"Hard",q:"A man walks 10 km north, then 10 km east. What is his displacement from the starting point?",o:["10 km","20 km","10√2 km","5√2 km"],a:2,e:"The two perpendicular movements form a right triangle, giving displacement √(10²+10²) = 10√2 km."},
 {exam:"CDS",level:"Hard",q:"Choose the grammatically correct sentence:",o:["No sooner he arrived than it started raining.","No sooner had he arrived than it started raining.","No sooner did he arrived than it started raining.","No sooner he had arrived when it started raining."],a:1,e:"The standard construction is 'No sooner had ... than ...'."},
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
