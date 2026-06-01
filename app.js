import {
db,
doc,
getDoc
}
from "./firebase.js";

async function loadWebsiteData() {

try {

const websiteRef = doc(
db,
"website",
"main"
);

const snap = await getDoc(websiteRef);

if (!snap.exists()) {
console.log("No website data found");
return;
}

const data = snap.data();

if (data.name) {
document.getElementById("siteName").textContent = data.name;
}

if (data.about) {
document.getElementById("aboutText").textContent = data.about;
}

if (data.logo) {

const logo = document.getElementById("logo");
const heroLogo = document.getElementById("heroLogo");

if (logo) logo.src = data.logo;
if (heroLogo) heroLogo.src = data.logo;

}

if (data.youtube1) {
document.getElementById("youtube1").href =
data.youtube1;
}

if (data.youtube2) {
document.getElementById("youtube2").href =
data.youtube2;
}

if (data.youtube3) {
document.getElementById("youtube3").href =
data.youtube3;
}

if (data.tiktok) {
document.getElementById("tiktok").href =
data.tiktok;
}

if (data.email) {

document.getElementById("emailText").textContent =
data.email;

document.getElementById("emailBtn").href =
`mailto:${data.email}`;

}

console.log("Website Data Loaded");

} catch (error) {

console.error(error);

}

}

loadWebsiteData();
