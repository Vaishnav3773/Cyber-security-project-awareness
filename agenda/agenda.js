document.addEventListener('DOMContentLoaded', function() {
            const goals = document.querySelectorAll('.gols');
            const cards = document.querySelectorAll('.card');
           
            
            // Initially hide all cards
            cards.forEach(card => {
                card.classList.remove('active');
            });
            
            // Add event listeners to each goal
            goals.forEach(goal => {
                goal.addEventListener('click', function() {
                    const targetId = this.getAttribute('data-target');
                    
                    // Hide all cards
                    cards.forEach(card => {
                        card.classList.remove('active');
                    });
                    
                    // Show the target card with a slight delay for smooth animation
                    setTimeout(() => {
                        const targetCard = document.getElementById(targetId);
                        if (targetCard) {
                            targetCard.classList.add('active');
                        }
                    }, 50);
                });
            });
        });