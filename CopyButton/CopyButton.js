// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    const copy1 = document.querySelector('.copytext');

    const selectMe = () => {
        navigator.clipboard.writeText(copy1.innerText);
        console.log(copy1.innerText);
    }

    document.getElementById('copy').addEventListener('click', () => {
        selectMe();
    });
});
