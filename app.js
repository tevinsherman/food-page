// let emailCollectorForm = document.getElementById('Email-Collector')
// emailCollectorForm.addEventListener("submit", event => {
//   event.preventDefault()
//   // Do something with the event
//   console.log('The event is firing')

//   let ourFormData = new FormData(event.target)

//   let userFirstName = ourFormData.get("firstName")

//   let updateHTMLContent = `
//       <h2>Congrulations ${userFirstName}!</h2>

//       <p> At Pizza Galore the secret to success is much like the secret to making a better pizza - thanks for signing up</p>
//       <p class="fine-print">We'll never share your information
//       without your permission</p>
//       `
//   let ourMainContent = document.getElementById("Main-Content")
//   ourMainContent.innerHTML = updateHTMLContent
// })

let emailCollectorForm = document.getElementById("Email-Collector")
            emailCollectorForm.addEventListener("submit", event => {
                event.preventDefault()
                // Do something with the event
                console.log("The event is firing!")
                
                let ourFormData = new FormData(event.target)
                
                let userFirstName = ourFormData.get("firstname")
                
                let updatedHtmlContent = `
                    <h2>Congratulations, ${userFirstName}!</h2>

                    <p>You're on your way to becoming a BBQ Master!</p>
                    
                    <p class="fine-print">We'll never share your information without your permission</p>
                `
                let ourMainContent = document.getElementById("Main-Content")
                ourMainContent.innerHTML = updatedHtmlContent
            })