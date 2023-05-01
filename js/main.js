document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")

        
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")


    })



    
    // Dropdown replaces text (might be an error in placement within the code)
    document.querySelectorAll('.dropdown.select').forEach(el => {
        let btn = el.querySelector('button');
        el.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault()
                btn.innerText = a.innerText;

                //closes dropdown
                el.classList.remove("active");
            })
        })
    });
        


})




function hamburgerToggle(x) {
    x.classList.toggle("change");

    document.body.classList.toggle("overflow-hidden");

    let sidebar = document.querySelector(".sidebar-nav ul");
    sidebar.classList.toggle("show");
}

function eventMenuToggle(x) {
    let sidebar = document.querySelector(".event-sidebar-nav .accordion-menu");
    sidebar.classList.toggle("show");
}




// all clickable-entries display modal form
document.querySelectorAll('.clickable-entry').forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        let entryModal = bootstrap.Modal.getOrCreateInstance('#entryModal');
        entryModal.show();
    });
});

//clear form
let clearEntryModal = document.getElementById('entryModal');
clearEntryModal.addEventListener('hidden.bs.modal', function (event) {
    document.getElementById("entryForm").reset();
})
let clearRoomModal = document.getElementById('roomModal');
clearRoomModal.addEventListener('hidden.bs.modal', function (event) {
    document.getElementById("roomForm").reset();
})