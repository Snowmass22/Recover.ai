// Voice Guide Feature
document.addEventListener('DOMContentLoaded', () => {
    addVoiceGuideButton("Select the appropriate meal classification and provide an image for automated dietary analysis.");
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