// Embedded company data
const memberData = {
  company: [
    {
      "name": "NovaTech Solutions",
      "address": "123 Innovation Way",
      "phone_number": "+1-415-555-0123",
      "website_url": "https://novatechsolutions.com",
      "image_file": "novatech_logo.png",
      "joined_date": "2023-04-10",
      "notes": "New startup specializing in AI tools"
    },
    {
      "name": "BluePeak Systems",
      "address": "456 Skyline Drive",
      "phone_number": "+1-303-555-0175",
      "website_url": "https://bluepeaksystems.com",
      "image_file": "bluepeak_logo.png",
      "joined_date": "2021-09-22",
      "notes": "Gold member with global operations"
    },
    {
        "name": "GreenCore Industries",
        "address": "789 Eco Park Blvd, Portland, OR 97201",
        "phone_number": "+1-971-555-0181",
        "website_url": "https://greencoreindustries.com",
        "image_file": "greencore_logo.png",
        "membership_level": 2,
        "joined_date": "2022-02-18",
        "status": "pending",
        "notes": "Environmentally-focused manufacturing firm"
      },
      {
        "name": "NextGen Analytics",
        "address": "321 Data Lane, Austin, TX 73301",
        "phone_number": "+1-512-555-0102",
        "website_url": "https://nextgenanalytics.ai",
        "image_file": "nextgen_logo.png",
        "membership_level": 1,
        "joined_date": "2024-06-05",
        "status": "active",
        "notes": "Specializes in predictive modeling"
      },
      {
        "name": "Urban Hive Collective",
        "address": "654 Metro Blvd, Chicago, IL 60616",
        "phone_number": "+1-312-555-0133",
        "website_url": "https://urbanhivecollective.com",
        "image_file": "urbanhive_logo.png",
        "membership_level": 2,
        "joined_date": "2023-01-27",
        "status": "active",
        "notes": "Community co-working and innovation hub"
      },
      {
        "name": "CloudBridge Networks",
        "address": "987 Fiber Street, Seattle, WA 98104",
        "phone_number": "+1-206-555-0119",
        "website_url": "https://cloudbridgenetworks.net",
        "image_file": "cloudbridge_logo.png",
        "membership_level": 1,
        "joined_date": "2022-07-12",
        "status": "inactive",
        "notes": "Currently restructuring IT services"
      },
      {
        "name": "Solaris Energy Group",
        "address": "111 Sunpark Drive, Phoenix, AZ 85004",
        "phone_number": "+1-602-555-0167",
        "website_url": "https://solarisenergygroup.com",
        "image_file": "solaris_logo.png",
        "membership_level": 3,
        "joined_date": "2020-05-01",
        "status": "active",
        "notes": "Renewable energy leader, lifetime gold member"
      }
  ]
};

let companies = memberData.company;
renderCompanies("grid"); // Default view
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
          <img src="../../images/${company.image_file}" alt="${company.name} Logo">
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
