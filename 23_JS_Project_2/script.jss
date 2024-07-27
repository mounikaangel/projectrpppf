const countries = [
    { name: 'China', population: 1444216107, languages: ['Chinese'] },
    { name: 'India', population: 1393409038, languages: ['Hindi', 'English'] },
    { name: 'USA', population: 331893745, languages: ['English'] },
    { name: 'Indonesia', population: 276361783, languages: ['Indonesian'] },
    { name: 'Pakistan', population: 225199937, languages: ['Urdu', 'English'] },
    { name: 'Brazil', population: 213993437, languages: ['Portuguese'] },
    { name: 'Nigeria', population: 211400708, languages: ['English'] },
    { name: 'Bangladesh', population: 166303498, languages: ['Bengali'] },
    { name: 'Russia', population: 145912025, languages: ['Russian'] },
    { name: 'Mexico', population: 130262216, languages: ['Spanish'] },
    // ... other countries
];
// Example countries data
const countries = [
    { name: 'China', population: 1444216107, languages: ['Chinese'] },
    { name: 'India', population: 1393409038, languages: ['Hindi', 'English'] },
    { name: 'USA', population: 331893745, languages: ['English'] },
    { name: 'Indonesia', population: 276361783, languages: ['Indonesian'] },
    { name: 'Pakistan', population: 225199937, languages: ['Urdu', 'English'] },
    { name: 'Brazil', population: 213993437, languages: ['Portuguese'] },
    { name: 'Nigeria', population: 211400708, languages: ['English'] },
    { name: 'Bangladesh', population: 166303498, languages: ['Bengali'] },
    { name: 'Russia', population: 145912025, languages: ['Russian'] },
    { name: 'Mexico', population: 130262216, languages: ['Spanish'] },
    // More countries can be added as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const populationChart = document.getElementById('population-chart');
    const languagesChart = document.getElementById('languages-chart');

    // Helper function to create bar
    function createBar(label, value, count) {
        const bar = document.createElement('div');
        bar.className = 'bar';

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label';
        labelDiv.textContent = label;

        const valueDiv = document.createElement('div');
        valueDiv.className = 'value';
        valueDiv.style.width = `${value}%`;

        const countDiv = document.createElement('div');
        countDiv.className = 'count';
        countDiv.textContent = count;

        bar.appendChild(labelDiv);
        bar.appendChild(valueDiv);
        bar.appendChild(countDiv);

        return bar;
    }

    // Function to display top 10 most populated countries
    function displayMostPopulatedCountries() {
        const topTenCountries = countries.sort((a, b) => b.population - a.population).slice(0, 10);
        const maxPopulation = topTenCountries[0].population;

        topTenCountries.forEach(country => {
            const percentage = (country.population / maxPopulation) * 100;
            populationChart.appendChild(createBar(country.name, percentage, country.population.toLocaleString()));
        });
    }

    // Function to find and display the top 10 most spoken languages
    function displayMostSpokenLanguages() {
        const languageCounts = {};

        countries.forEach(country => {
            country.languages.forEach(language => {
                if (languageCounts[language]) {
                    languageCounts[language]++;
                } else {
                    languageCounts[language] = 1;
                }
            });
        });

        const sortedLanguages = Object.entries(languageCounts).sort((a, b) => b[1] - a[1]);
        const topTenLanguages = sortedLanguages.slice(0, 10);
        const maxLanguageCount = topTenLanguages[0][1];

        topTenLanguages.forEach(([language, count]) => {
            const percentage = (count / maxLanguageCount) * 100;
            languagesChart.appendChild(createBar(language, percentage, count));
        });
    }

    // Display the charts
    displayMostPopulatedCountries();
    displayMostSpokenLanguages();
});
