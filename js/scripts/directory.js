// Embedded company data
const memberData = {
  company: [
    {
      name: "NovaTech Solutions",
      address: "123 Innovation Way",
      phone_number: "+1-415-555-0123",
      website_url: "https://novatechsolutions.com",
      image_file: "novatech_logo.png",
      joined_date: "2023-04-10",
      notes: "New startup specializing in AI tools"
    },
    {
      name: "BluePeak Systems",
      address: "456 Skyline Drive",
      phone_number: "+1-303-555-0175",
      website_url: "https://bluepeaksystems.com",
      image_file: "bluepeak_logo.png",
      joined_date: "2021-09-22",
      notes: "Gold member with global operations"
    }
    // ... all your remaining companies
  ]
};

let companies = memberData.company;

// Grid/List switcher
function switchView(view) {
  const container = document.getElementById("company-container");
  if (container) {
    container.className = `company-container ${view}`;
    renderCompanies(view);
  }
}

// Render company cards
function renderCompanies(view) {
  const container = document.getElementById("company-container");
  if (!container) return;

  container.innerHTML = '';

  companies.forEach(company => {
    const year = new Date(company.joined_date).getFullYear();

    if (view === "grid") {
      container.innerHTML += `
        <div class="company-card">
          <img src="images/${company.image_file}" alt="${company.name} Logo">
          <h2>${company.name}</h2>
          <p><strong>Joined:</strong> ${year}</p>
          <button onclick="showDetails('${company.name}', '${company.address}', '${company.phone_number}', '${company.website_url}', '${company.notes}')">See More</button>
        </div>
      `;
    } else {
      container.innerHTML += `
        <div class="company-card">
          <div class="details">
            <h2>${company.name}</h2>
            <p><strong>Joined:</strong> ${year}</p>
          </div>
          <button onclick="showDetails('${company.name}', '${company.address}', '${company.phone_number}', '${company.website_url}', '${company.notes}')">See More</button>
        </div>
      `;
    }
  });
}

// Show details using alert() (kept as requested)
function showDetails(name, address, phone, website, notes) {
  alert(`Details for ${name}

Address: ${address}
Phone: ${phone}
Website: ${website}
Notes: ${notes}`);
}
