import imageMap from './image_map.json';

export function cleanContent(content) {
    if (!content) return '';

    // Fix Legacy Image Paths (http://.../wp-content/uploads/ -> /uploads/)
    let cleaned = content.replace(/(https?:\/\/[^\/]+)?\/wp-content\/uploads\//g, '/uploads/');

    // Replace [vc_single_image image="123"] with <img src="...">
    cleaned = cleaned.replace(/\[vc_single_image[^\]]*image="(\d+)"[^\]]*\]/g, (match, id) => {
        if (imageMap[id]) {
            return `<img src="/uploads/${imageMap[id]}" alt="Image ${id}" class="content-image" />`;
        }
        return '';
    });

    // Replace [bezel_home_slide image="123"] with valid image (optional)
    cleaned = cleaned.replace(/\[bezel_[^\]]*image="(\d+)"[^\]]*\]/g, (match, id) => {
        if (imageMap[id]) {
            return `<img src="/uploads/${imageMap[id]}" alt="Slide ${id}" class="content-image" />`;
        }
        return '';
    });

    // Strip remaining shortcodes
    cleaned = cleaned.replace(/\[\/?[\w_-]+.*?\]/g, '');

    return cleaned;
}

export function extractFirstImage(content) {
    if (!content) return null;

    // 1. Check for standard <img> tags
    let match = content.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
    if (match && match[1]) {
        return match[1].replace(/(https?:\/\/[^\/]+)?\/wp-content\/uploads\//g, '/uploads/');
    }

    // 2. Check for [vc_single_image image="123"]
    match = content.match(/\[vc_single_image[^\]]*image="(\d+)"/);
    if (match && match[1] && imageMap[match[1]]) {
        return `/uploads/${imageMap[match[1]]}`;
    }

    // 3. Check for [bezel_... image="123"]
    match = content.match(/\[bezel_[^\]]*image="(\d+)"/);
    if (match && match[1] && imageMap[match[1]]) {
        return `/uploads/${imageMap[match[1]]}`;
    }

    // 4. Check for Video Embeds - Use a placeholder if it's a video post
    // Matches [vc_video link="..."] or [video ...]
    if (content.match(/\[vc_video/i) || content.match(/\[video/i) || content.match(/iframe/i)) {
        // Return a specific placeholder for videos, or just a default branding image
        // Assuming we have a logo or something in uploads. 
        // Let's use ID 5482 (Main Banner) or 1210 (Logo) as fallback/default for video posts
        // From map: 5482 -> 2022/11/Main-Banner.jpg
        if (imageMap["5482"]) return `/uploads/${imageMap["5482"]}`;
    }

    // 4. Check for Video Embeds - Use a placeholder if it's a video post
    // Matches [vc_video link="..."] or [video ...]
    if (content.match(/\[vc_video/i) || content.match(/\[video/i) || content.match(/iframe/i)) {
        // Return a specific placeholder for videos, or just a default branding image
        if (imageMap["5482"]) return `/uploads/${imageMap["5482"]}`;
    }

    // 5. Fallback - Return a default image if nothing else is found
    // This ensures no card is ever empty.
    if (imageMap["5482"]) return `/uploads/${imageMap["5482"]}`;

    return null;
}

export function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
