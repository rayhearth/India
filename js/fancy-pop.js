const imgbx = document.querySelectorAll('.imgbx');
        imgbx.forEach(popup => popup.addEventListener('click',()=>{
            popup.classList.toggle('active')
        }))