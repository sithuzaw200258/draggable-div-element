const wrapper = document.querySelector(".wrapper"),
    header = wrapper.querySelector("header");

function onDrag({ movementX, movementY }) {
    let getStyle = window.getComputedStyle(wrapper),
        left = parseInt(getStyle.left), // getting left value of wrapper and parsing string to integer or number
        top = parseInt(getStyle.top); // getting top value of wrapper and parsing string to integer or number

    wrapper.style.left = `${left + movementX}px`;
    wrapper.style.top = `${top + movementY}px`;
    //console.log(e);
}

header.addEventListener("mousedown", () => {
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
})