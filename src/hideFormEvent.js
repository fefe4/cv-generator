function hideForm () {
  const pdfBtn = document.getElementById('pdfBtn');
  pdfBtn.addEventListener ('click', ()=> {

    const form = document.querySelectorAll('form');
    form[0].style.display = "none"; 
    form[1].style.display = "none";
    form[2].style.display = "none";

    const xBtn = document.getElementsByClassName ("deleteBtn");
    for (let i=0; i<xBtn.length; i++) {
      xBtn[i].style.display ="none";
    }

    const title = document.querySelector("h1");
    title.style.display = "none";
  });
}

export default hideForm;