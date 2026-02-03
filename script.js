// 🔐 PASSWORD
const passwordGate = document.getElementById("passwordGate");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const passwordMessage = document.getElementById("passwordMessage");

const secretPassword = "0406"; // change this to your password

submitPassword.onclick = () => {
  if (passwordInput.value.toLowerCase() === secretPassword.toLowerCase()) {
    passwordGate.classList.add("hidden");
    mainContent.classList.remove("hidden");
  } else {
    passwordMessage.innerText = "❌ Wrong password… try again!";
    // optional: shake input for fun
    passwordInput.classList.add("shake");
    setTimeout(() => passwordInput.classList.remove("shake"), 500);
  }
};

// 💖 HEARTS
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "💖";
  h.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);

// 🐝 BEES
document.querySelectorAll(".bee").forEach(b => {
  b.style.left = Math.random() * window.innerWidth + "px";
  b.style.top = Math.random() * window.innerHeight + "px";
});

// 😈 NO BUTTON
const noBtn = document.getElementById("no");
noBtn.onmouseover = () => {
  noBtn.style.left = Math.random() * (window.innerWidth - 150) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 80) + "px";
};

// 💕 YES
document.getElementById("yes").onclick = () => {
  valentine.classList.add("hidden");
  yesMessage.classList.remove("hidden");
  explodeHearts();
  setTimeout(() => quizIntro.classList.remove("hidden"), 2000);
};

// 💥 HEART EXPLOSION
function explodeHearts() {
  for (let i = 0; i < 20; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💘";
    h.style.left = "50%";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}

// 💖 QUIZ (FULL ORIGINAL CONTENT + COLORS + VIBRATION)
const questions = [
  {
    q: "Who’s hotter? 😏",
    a: [
      ["Me (obviously)", "I mean… I look good, but standing next to you humbles me 😌", false],
      ["You (no debate)", "", true],
      ["Us together 🥵", "Okay yeah, together we’re dangerous—but you still steal the attention 😉", false],
      ["The tension rn", "Let’s be real, the tension exists because of you 💛", false]
    ]
  },
  {
    q: "Who fell in love first? 💘",
    a: [
      ["You (I saw it coming)", "I noticed before you admitted it… and I loved that 🔥", false],
      ["Me (I tried to play it cool)", "I absolutely failed at hiding it, didn’t I? 💗", false],
      ["Both at the same time (soulmate timing ✨)", "", true],
      ["Our vibes before we did", "Honestly yeah, everyone else knew before we did 🐝", false]
    ]
  },
  {
    q: "Who is funnier? 😏",
    a: [
      ["Me (obviously 🙄)", "Okay yeah… but I still laugh the hardest when it’s you 😌", false],
      ["You (don’t let it go to your head)", "I won’t say it out loud, but you know it’s true 😂", false],
      ["Both of us (comedy duo energy 😌)", "", true],
      ["The arguments we turn into jokes", "Nothing beats us roasting each other mid-argument 😏", false]
    ]
  },
  {
    q: "Who loves more? 🥰",
    a: [
      ["You (dramatically)", "You love loudly—and I honestly love that about you 💗", false],
      ["Me (unhealthily 😌)", "Maybe a little too much… but I wouldn’t change it 💛", false],
      ["Both—just differently but deeply 💗", "", true],
      ["Takli Lhrissa?.", "Not allowed, wanna eat smth else instead?", false]
    ]
  },
  {
    q: "What’s my favorite thing about you? 😍",
    a: [
      ["Your looks (hello??)", "You’re beautiful, obviously—but that’s not the main thing 💛", false],
      ["Your personality (huge bonus)", "Your personality is honestly addictive 💖", false],
      ["The way you make me feel loved & calm 🤍", "", true],
      ["The fact that you’re mine 😌", "Not because you’re ‘mine’—but because you chose me 😘", false]
    ]
  }
];


let qi = 0;
quizIntro.onclick = () => {
  quiz.classList.remove("hidden");
  showQ();
};

function showQ() {
  question.innerText = questions[qi].q;
  answers.innerHTML = "";
  questions[qi].a.forEach(ans => {
    const b = document.createElement("button");
    b.innerText = ans[0];
    b.onclick = () => {
    if (ans[2]) {
  b.classList.add("correct");
  explodeHearts();
  setTimeout(() => {
    qi++;
    qi < questions.length ? showQ() : revealNext();
  }, 800);
      } else {
        b.classList.add("wrong");
        b.innerText = "❌ " + ans[1];
      }
    };
    answers.appendChild(b);
  });
}

// 💌 REVEAL
function revealNext() {
  ["dates","love","memories","music","goodbye"].forEach((id,i)=>{
    setTimeout(()=>document.getElementById(id).classList.remove("hidden"), i*1200);
  });

  const loveItems = [
   "Your brains—so smart, I pretend to understand… but mostly just stare and look cute. 🧠😉",
    "Those deep eyes—I swear they hypnotize me… or maybe I’m just weak for you. 👀💘",
    "When you “correct” my English… I lie, I hate it… but secretly, it’s my favorite torture. 😏",
    "Your mix of cute, hot, and beautiful—illegal, honestly. 🔥🥰",
    "How unique you are—like, did the universe make you just to annoy me and steal my heart? 💎💖",
    "Your laugh—it makes me want to do everything right… or at least make you laugh more. 😄💗"
  ];

  loveItems.forEach((t,i)=>{
    setTimeout(()=>{
      const c=document.createElement("div");
      c.className="card";
      c.innerText=t;
      loveList.appendChild(c);
    },i*700);
  });
}

const dateMessages = {
  "🎬 Cinema": "I'll let you choose… maybe 😌🎬",
  "🏖️ Walk on the beach": "Oh, so you need to wear those comfy shoes of yours 👟💛",
  "☕ Coffee & cheesecake": "Starbucks Villa & Amoud strawberry cheesecake 🍰☕",
  "🎮 Play our game": "I'll watch you destroy me & pull these tricks on me 🎮😤",
  "💋 Make love (the hottest idea 🔥)": "You better get ready 😈🔥"
};

document.querySelectorAll("#dates .card").forEach(card => {
  card.onclick = () => {
    document.querySelectorAll("#dates .card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");

    dateResult.innerText = dateMessages[card.innerText];
  };
});

// 📸 FLIP
function flip(el){ el.classList.toggle("flipped"); }
setInterval(() => {
  const s = document.createElement("div");
  s.innerText = "✨";
  s.style.position = "fixed";
  s.style.left = Math.random() * window.innerWidth + "px";
  s.style.top = window.innerHeight + "px";
  s.style.fontSize = "18px";
  s.style.animation = "float 5s linear";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 5000);
}, 600);

const worm = document.getElementById("worm");

document.addEventListener("mousemove", (e) => {
  worm.style.left = e.clientX + "px";
  worm.style.top = e.clientY + "px";
});
const floatingLove = ["💗", "🌸", "✨", "💞", "🫶"];

setInterval(() => {
  const f = document.createElement("div");
  f.innerText = floatingLove[Math.floor(Math.random() * floatingLove.length)];
  f.style.position = "fixed";
  f.style.left = Math.random() * window.innerWidth + "px";
  f.style.bottom = "-20px";
  f.style.fontSize = "22px";
  f.style.animation = "float 6s linear";
  f.style.pointerEvents = "none";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 6000);
}, 500);




