function animateProgressBars() {
    document.querySelectorAll('.progress').forEach(bar => {
        setTimeout(() => {
            const width = bar.dataset.width;
            bar.style.width = `${width}%`;
        }, 200)
    })
}

// function setTimelineStyle() {
//     document.querySelectorAll('.growth-block').forEach(element => {
//         console.log(element.after);
//     })
// }

window.addEventListener('load', animateProgressBars);
//window.addEventListener('load', setTimelineStyle);