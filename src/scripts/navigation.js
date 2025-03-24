function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("No previous page in history.");
    }
}

function goForward() {
    // Note: There's no direct way to check if there's a "next" page in history.
    window.history.forward();
}
