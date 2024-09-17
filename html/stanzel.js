document.addEventListener('DOMContentLoaded', function() {
    const genderSelect = document.getElementById('gender');
    const residenceSelect = document.getElementById('residence');
    const roomListDiv = document.getElementById('room-list');

    

    // Function to filter residence halls based on gender
    function filterHostelsByGender() {
        const selectedGender = genderSelect.value;

        // Enable or disable residence halls based on selected gender
        for (let i = 0; i < residenceSelect.options.length; i++) {
            const option = residenceSelect.options[i];

            if (selectedGender === 'male' && option.classList.contains('female')) {
                option.disabled = true;
            } else if (selectedGender === 'female' && option.classList.contains('male')) {
                option.disabled = true;
            } else {
                option.disabled = false;
            }
        }

        // Reset the residence dropdown selection
        residenceSelect.selectedIndex = 0;
    }

    // Attach event listener to gender select dropdown
    genderSelect.addEventListener('change', filterHostelsByGender);

    // Event listener to check for invalid selection
    residenceSelect.addEventListener('change', function() {
        const selectedGender = genderSelect.value;
        const selectedOption = residenceSelect.options[residenceSelect.selectedIndex];

        // Check if the selected option is disabled
        if (selectedOption.disabled) {
            alert('You cannot select this residence hall based on your gender.');
            residenceSelect.selectedIndex = 0;  // Reset to the default option
        }
    });
}); 





        
        
                   


