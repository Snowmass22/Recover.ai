// Example: Add a background shadow to navbar on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// Simple alert for buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(btn.getAttribute('href') === "#") {
            e.preventDefault();
            alert("Booking system coming soon!");
        }
    });
});

// Voice Guide Feature
document.addEventListener('DOMContentLoaded', () => {
    addVoiceGuideButton("Welcome to Recover AI. This is your home page. Scroll down to learn about our features, or use the navigation bar to sign up and start tracking your health journey.");
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