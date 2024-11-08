function display() {
    window.alert("hello roman");
}

let out = setTimeout(display, 3000);  // Schedule alert after 3 seconds

// Cancel the timeout after 1 second
setTimeout(() => clearTimeout(out), 1000);  
