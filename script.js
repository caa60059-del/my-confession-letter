document.getElementById('sendBtn').addEventListener('click', function() {
    const letterText = document.querySelector('.letter').innerText;
    alert('Your confession has been sent with love! 💌\n\nPreview:\n' + letterText.substring(0, 200) + '...');
    // In a real app, replace with fetch() to send to a server
});
