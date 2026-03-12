function toggleMenu() {
        const nav = document.querySelector(".nav-links");
        nav.classList.toggle("active");
      }
 

// Voice Guide Feature
document.addEventListener('DOMContentLoaded', () => {
    addVoiceGuideButton("This is your health dashboard. Here you can see your weekly activity trends, including steps taken and calories burned. Sync with Google Fit for real-time data.");
});

function addVoiceGuideButton(text) {
    const btn = document.createElement("button");
    btn.innerHTML = "🔊 Page Guide";
    btn.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:1000;padding:10px 20px;background:#00c897;color:white;border:none;border-radius:25px;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.2);font-weight:bold;font-family:sans-serif;";
    
    btn.onclick = () => {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        } else {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        }
    };
    document.body.appendChild(btn);
}