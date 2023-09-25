document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generating_letter');
    const answer = document.getElementById('letter_generated');


    button.addEventListener('click', () => {

        const getRandomLetter = () => {
			const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			const randomIndex = Math.floor(Math.random() * alphabet.length);
			return alphabet.charAt(randomIndex);
		};
		
		const randomLetter = getRandomLetter();
	
        fetch(`${randomLetter}`)
            .then((answer) => answer.json())
            .then((data) => {
                answer.innerHTML = ` ${data.message}`;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
});
