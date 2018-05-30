console.log('Welcome to Validation Station!')
document.addEventListener("DOMContentLoaded", (event) => {

  const form = document.querySelector('#new-train-car-form');
  console.log('NEW TRAIN CAR FORM:', form);
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    //const kind = event.target.kind;
    //const brand = document.querySelector("#train-brand")
    const {
      kind,
      brand,
      seats
    } = event.target;
    //const values = [ kind, brand, seats ]
    function addList(event) {
      const ul = document.querySelector("#car-list");
      //for(let i=0; i<3; i++){
      const list = document.createElement("li");
      ul.appendChild(list);
      //list.innerHTML = `You selected ${values[i].value},`;
      list.innerHTML = `You added <bold>${kind.value}</bold> kind of car, <bold>${brand.value}</bold> with <bold>${seats.value}</bold> seats.`
    }
    // kind.setAttribute("required", true);
    // brand.setAttribute("required", true);
    //Check for the
    if (kind.value === "observation" || kind.value === "passenger") {
      const seats = event.target.seats;
      if (!seats.value) {
        const error = document.querySelector("#error");
        //Remove the d-none class from div which hides the div element
        error.classList.remove("d-none");
        error.textContent = "You must have a seat number";
      } else {
        addList(event);
        form.reset();
        const error = document.querySelector("#error");
        //Remove the d-none class from div which hides the div element
        if (error.classList.contains('alert-danger')) {
          error.classList.remove('d-none');
          error.classList.remove('alert-danger');
          error.classList.add('alert-success');
          console.log(error);
        }
        document.querySelector(".alert p").textContent = "Your tickets are reserved";
      }
    }
  })
})
