
import { supabase } from './supabase.js'

const container = document.getElementById("athleteContainer");

async function loadAthletes() {
  const { data, error } = await supabase.from('athletes').select('*');
  if (error) {
    console.error('Error fetching athletes:', error);
    container.innerHTML = "<p>Error loading athletes.</p>";
    return;
  }
  renderAthletes(data);
}

function renderAthletes(data) {
  container.innerHTML = "";
  data.forEach(a => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="info">
        <h3>${a.name}</h3>
        <p>${a.position} • Class of ${a.class_year}</p>
        <span class="tag">Rising Stock</span>
      </div>
      <a href="profile.html">View Profile</a>
    `;
    container.appendChild(card);
  });
}

loadAthletes();
