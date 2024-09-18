function showDetails(path) {
    const detailsContainer = document.getElementById('details-container');
    
    // Reset details container
    detailsContainer.innerHTML = '';

    // Add details based on the selected path
    switch (path) {
        case 'science':
            detailsContainer.innerHTML = '<p>Consider careers in science, technology, engineering, and mathematics (STEM).</p>';
            break;
        case 'commerce':
            detailsContainer.innerHTML = '<p>Explore opportunities in finance, business, and economics.</p>';
            break;
        case 'arts':
            detailsContainer.innerHTML = '<p>Engage in fields like humanities, literature, and social sciences.</p>';
            break;
        // Add more cases for additional paths
    }

    // Show details container
    detailsContainer.style.display = 'block';
}
