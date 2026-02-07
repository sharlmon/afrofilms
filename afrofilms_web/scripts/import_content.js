
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIG ---
const PUBLIC_DIR = path.join(__dirname, '../public');
const UPLOADS_DIR = path.join(PUBLIC_DIR, 'uploads');
const CONTENT_DIR = path.join(PUBLIC_DIR, 'content');
const MANIFEST_PATH = path.join(PUBLIC_DIR, 'content_manifest.json');

// --- DATA ---
const RAW_DATA = [
    // INDEPENDENT SHORT FILMS
    {
        title: "MERCY",
        date: "2022-01-01",
        category: "independent-fiction",
        genre: "Fiction",
        duration: "38 mins",
        url: "https://vimeo.com/797114635",
        synopsis: "When 15-year-old Mercy faces the unimaginable, her courage and resilience come to the fore. What could have been the end of her story is only the start of a new journey. (Award winning short impact Film Funded by Mastercard Foundation, based on real events that happened during COVID)."
    },
    {
        title: "a fork, a spoon & a KNIGHT",
        date: "2014-01-01",
        category: "independent-non-fiction",
        genre: "Hybrid Non-Fiction",
        duration: "12 mins",
        origin: "Uganda",
        url: "https://vimeo.com/185380833",
        synopsis: "An unknown slum boy transforms one of Uganda’s largest slums into an internationally recognized Chess Sanctuary. Mira Nair would go ahead to adapt this story into the Disney Feature Film, 'Queen of Katwe'."
    },
    {
        title: "VOICES from the Inside",
        date: "2020-01-01",
        category: "independent-non-fiction", // "hybrid prison series"
        genre: "Hybrid Series",
        duration: "17 mins",
        origin: "Kenya",
        url: "https://vimeo.com/427252748",
        synopsis: "A man accidentally kills his best friend in their local pub and has to pay for it with his life."
    },
    {
        title: "Mother’s Song",
        date: "2012-01-01",
        category: "independent-fiction",
        genre: "Fiction",
        duration: "13 mins",
        origin: "Singapore",
        url: "https://vimeo.com/69378089",
        synopsis: "At her Dad’s funeral, Linda reflects on the past when her dad’s favorite song is played. Dark memories surpass as she discovers that her dad was not as innocent as he seemed."
    },
    {
        title: "In Shadows",
        date: "2013-02-01", // Different month to avoid collision
        category: "independent-fiction",
        genre: "Fiction",
        duration: "23 mins",
        origin: "Kenya",
        url: "https://vimeo.com/251131427",
        synopsis: "A young boy loses his parents in war and finds refuge in the city, but his past controls his extreme emotions that nearly cost him his life."
    },
    {
        title: "A sister’s Voice",
        date: "2018-01-01",
        category: "independent-non-fiction",
        genre: "Non-Fiction",
        duration: "12 mins",
        origin: "Kenya",
        url: "https://vimeo.com/246240188",
        synopsis: "The film is a delicate recollection of intimate stories by 15 refugee girls who recently fled from Congo, Burundi, Uganda and Ethiopia."
    },
    {
        title: "CLOSER THROUGH OUR CLOTHES",
        date: "2021-01-01",
        category: "commissioned-projects",
        genre: "Branded Short",
        origin: "Uganda/Japan",
        director: "Yu Yamanaka / Zippy Kimundu",
        url: "https://www.youtube.com/watch?v=R0Pq75E3iro",
        synopsis: "A simple act of generosity connects a Japanese girl and a Sudanese refugee in Uganda, creating an unexpected friendship across continents. Award for Best Branded Short of the Year at the Short Shorts Film Festival - 2021."
    },

    // BRITISH COUNCIL 'Culture Grows Series' (Selecting 4-5 mins versions for main portfolio to avoid clutter, or maybe 1 min? Let's do 4-5 mins)
    { title: "ROOTED", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/377524351", date: "2019-01-01", client: "British Council" },
    { title: "BENGATRONICS", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/408945524", date: "2019-01-02", client: "British Council" },
    { title: "TOO EARLY FOR BIRDS", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/408927451", date: "2019-01-03", client: "British Council" },
    { title: "PEPERUKA", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/408900884", date: "2019-01-04", client: "British Council" },
    { title: "HISTORIA", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/408819364", date: "2019-01-05", client: "British Council" },
    { title: "HEVA", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/408960575", date: "2019-01-06", client: "British Council" },

    // Standard Chartered Bank Kenya
    { title: "ROYAL GARMENTS", category: "commissioned-projects", genre: "Corporate", url: "https://vimeo.com/417107037", date: "2020-05-01", client: "Standard Chartered" },
    { title: "SHELL", category: "commissioned-projects", genre: "Corporate", url: "https://vimeo.com/417141063", date: "2020-05-02", client: "Standard Chartered" },
    { title: "MIREMA SCHOOL", category: "commissioned-projects", genre: "Corporate", url: "https://vimeo.com/417122881", date: "2020-05-03", client: "Standard Chartered" },
    { title: "GRANGE WATER", category: "commissioned-projects", genre: "Corporate", url: "https://vimeo.com/417108370", date: "2020-05-04", client: "Standard Chartered" },
    { title: "KARIBU TRAVELS", category: "commissioned-projects", genre: "Corporate", url: "https://vimeo.com/417136588", date: "2020-05-05", client: "Standard Chartered" },
    { title: "EDUCARE TVC", category: "commissioned-projects", genre: "TVC", url: "https://vimeo.com/416069550", date: "2020-05-06", client: "Standard Chartered" },

    // Standard Chartered Global
    { title: "Tope, Mall for Africa", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/219052283", date: "2017-01-01", client: "Standard Chartered Global" },
    { title: "Point Blank", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/219051125", date: "2017-01-02", client: "Standard Chartered Global" },
    { title: "Furaha, CocoLili", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/219050496", date: "2017-01-03", client: "Standard Chartered Global" },
    { title: "Sheila, M:Lab", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/219051883", date: "2017-01-04", client: "Standard Chartered Global" },

    // Lighting Africa
    { title: "Structures", category: "commissioned-projects", genre: "Documentary", url: "https://vimeo.com/136818586", date: "2015-01-01", client: "Lighting Africa" },
    { title: "New Market", category: "commissioned-projects", genre: "Documentary", url: "https://vimeo.com/136817686", date: "2015-01-02", client: "Lighting Africa" },

    // Tusk Awards
    { title: "Achilles", category: "commissioned-projects", genre: "Awards Film", url: "https://www.youtube.com/watch?v=xOfKNyjvvQo", date: "2024-01-01", client: "Tusk Awards" }, // Date guessed
    { title: "Dismas", category: "commissioned-projects", genre: "Awards Film", url: "https://www.youtube.com/watch?v=vWQ2TXiEu_0", date: "2024-01-02", client: "Tusk Awards" },

    // CHampions of CHange
    { title: "TABITHA - RANGER", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/849883073", date: "2023-01-01", client: "Champions of Change" },
    { title: "LAURENCIA – BIRD EXPERT", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/852614908", date: "2023-01-02", client: "Champions of Change" },
    { title: "KILIFI CONSERVATION WOMEN", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/852715159", date: "2023-01-03", client: "Champions of Change" },
    { title: "ROSETTE", category: "commissioned-projects", genre: "Docu-Series", url: "https://vimeo.com/852890863", date: "2023-01-04", client: "Champions of Change" },
];


// --- UTILS ---
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

async function fetchOEmbed(item) {
    let apiUrl = '';
    if (item.url.includes('vimeo.com')) {
        apiUrl = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(item.url)}`;
    } else if (item.url.includes('youtube.com') || item.url.includes('youtu.be')) {
        apiUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(item.url)}&format=json`;
    }

    return new Promise((resolve, reject) => {
        https.get(apiUrl, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    resolve(json);
                } catch (e) {
                    resolve(null); // Fail gracefully
                }
            });
        }).on('error', (err) => resolve(null));
    });
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}


// --- MAIN ---
async function main() {
    console.log("Starting bulk import...");

    // Read existing manifest
    let manifest = [];
    try {
        if (fs.existsSync(MANIFEST_PATH)) {
            manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
        }
    } catch (e) {
        console.log("Error reading manifest, starting fresh.");
    }

    let startId = 3000;

    for (const item of RAW_DATA) {
        // Dedup check by title or slug
        const slug = slugify(item.title);

        // Skip if exists (simple check)
        const exists = manifest.find(m => m.slug === slug);
        if (exists) {
            console.log(`Skipping ${item.title} (already exists)`);
            continue;
        }

        console.log(`Processing ${item.title}...`);

        // 1. Fetch Metadata
        const oEmbed = await fetchOEmbed(item);
        if (!oEmbed) {
            console.warn(`Could not fetch oEmbed for ${item.title}`);
            // Continue anyway with placeholders? No, best to just log.
        }

        const thumbnail = oEmbed ? (oEmbed.thumbnail_url || oEmbed.thumbnail_url_with_play_button) : null;
        let imageFilename = 'default-placeholder.jpg';

        if (thumbnail) {
            const ext = 'jpg'; // Assume jpg for simplicity or parse from url
            imageFilename = `${slug}.${ext}`;
            const dest = path.join(UPLOADS_DIR, imageFilename);
            try {
                await downloadImage(thumbnail, dest);
            } catch (e) {
                console.warn(`Failed to download image for ${item.title}`);
            }
        }

        // 2. Generate Content File
        const fileName = `post-${startId}-${slug}.md`;
        const date = item.date || new Date().toISOString();
        const contentPath = path.join(CONTENT_DIR, fileName);

        const mdContent = `---
title: "${item.title}"
date: "${date}"
categories: 
  - "${item.category}"
---

<img src="/uploads/${imageFilename}" alt="${item.title}" />

<div style="text-align: center; margin: 2rem 0;">
  <a href="${item.url}" target="_blank" rel="noopener noreferrer" style="background: transparent; color: #d4af37; border: 1px solid #d4af37; padding: 1rem 2rem; text-transform: uppercase;">
    Watch Project
  </a>
</div>

<h2>Synopsis</h2>
<p>
${item.synopsis || (oEmbed ? oEmbed.description : "") || "No synopsis available."}
</p>
`;

        fs.writeFileSync(contentPath, mdContent);

        // 3. Add to Manifest
        manifest.unshift({
            id: startId,
            title: item.title,
            date: date,
            type: "post",
            slug: slug,
            fileName: fileName,
            path: `/content/${fileName}`,
            category: item.category,
            genre: item.genre,
            director: item.director || "",
            origin: item.origin || "",
            duration: item.duration || "",
            client: item.client || ""
        });

        startId++;
    }

    // Write Manifest
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    console.log("Import complete!");
}

main();
