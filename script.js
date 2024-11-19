alert("Welcome to Our Pricing Table");
document.addEventListener('DOMContentLoaded', () => {  
    // Select all buttons that show details  
    const detailButtons = document.querySelectorAll('.show-details');  

    // Loop through each button  
    detailButtons.forEach(button => {  
        button.addEventListener('click', () => {  
            const planId = button.dataset.plan; // Get the plan id from the button's data attribute  
            const details = document.getElementById(planId); // Get the corresponding detail section  

            // Toggle visibility of the details  
            if (details.style.display === 'block') {  
                details.style.display = 'none';  
                button.textContent = 'Show Details'; // Change button text  
            } else {  
                details.style.display = 'block';  
                button.textContent = 'Hide Details'; // Change button text  
            }  
        });  
    });  
});