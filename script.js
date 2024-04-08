// Select the button using its ID
document.getElementById('careerGuideBot').addEventListener('click', function() {
    // Open a new window as a popup
    window.open('popupHTML/careerGuide.html', 'PopupWindow', 'width=600,height=400,left=200,top=200');
    window.botpressWebChat.sendEvent({ type: 'show' })
});

// Select the button using its ID
document.getElementById('personalTrainerBot').addEventListener('click', function() {
    // Open a new window as a popup
    window.open('popupHTML/personalTrainer.html', 'PopupWindow', 'width=600,height=400,left=200,top=200');
    window.botpressWebChat.sendEvent({ type: 'show' })
});

// Select the button using its ID
document.getElementById('bookBot').addEventListener('click', function() {
    // Open a new window as a popup
    window.open('popupHTML/book.html', 'PopupWindow', 'width=600,height=400,left=200,top=200');
    window.botpressWebChat.sendEvent({ type: 'show' })
});
