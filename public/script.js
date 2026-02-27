let talksData = [];

async function fetchTalks() {
    try {
        const response = await fetch('/api/talks');
        talksData = await response.json();
        renderTalks(talksData);
    } catch (error) {
        console.error('Error fetching talks:', error);
        document.getElementById('talksList').innerHTML = '<p class="error">Unable to load the schedule. Please try again later.</p>';
    }
}

function renderTalks(talks) {
    const talksList = document.getElementById('talksList');
    talksList.innerHTML = '';

    if (talks.length === 0) {
        talksList.innerHTML = '<p class="no-results">No talks found matching your search.</p>';
        return;
    }

    talks.forEach(talk => {
        const card = document.createElement('div');
        card.className = `talk-card ${talk.isBreak ? 'break-card' : ''}`;
        
        const speakersText = talk.speakers && talk.speakers.length > 0 
            ? `By: ${talk.speakers.join(' & ')}` 
            : '';

        const categoriesHtml = talk.category 
            ? talk.category.map(cat => `<span class="category-tag">${cat}</span>`).join('') 
            : '';

        card.innerHTML = `
            <span class="time">${talk.time} (${talk.duration})</span>
            <h3 class="talk-title">${talk.title}</h3>
            ${speakersText ? `<p class="speakers">${speakersText}</p>` : ''}
            <div class="categories">${categoriesHtml}</div>
            <p class="description">${talk.description}</p>
        `;
        
        talksList.appendChild(card);
    });
}

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (!searchTerm) {
        renderTalks(talksData);
        return;
    }

    const filteredTalks = talksData.filter(talk => {
        // Allow searching through categories, titles, and speakers
        const matchesCategory = talk.category && talk.category.some(cat => cat.toLowerCase().includes(searchTerm));
        const matchesTitle = talk.title && talk.title.toLowerCase().includes(searchTerm);
        const matchesSpeaker = talk.speakers && talk.speakers.some(speaker => speaker.toLowerCase().includes(searchTerm));
        
        // Don't filter out the lunch break unless it doesn't match and other things do
        if (talk.isBreak) return true;

        return matchesCategory || matchesTitle || matchesSpeaker;
    });

    renderTalks(filteredTalks);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    fetchTalks();
    document.getElementById('searchInput').addEventListener('input', handleSearch);
});
