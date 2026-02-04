export function cleanContent(content) {
    if (!content) return '';

    // Remove all [shortcodes] with attributes
    // Matches [tag ...]...[/tag] or self-closing [tag ...].
    // But actually we want to KEEP the content inside [vc_column_text]...[/vc_column_text]

    // Strategy: 
    // 1. Replace [vc_column_text] with nothing.
    // 2. Replace [/vc_column_text] with nothing.
    // 3. Remove other structural shortcodes [vc_row], [/vc_row], [vc_column], [/vc_column] etc.
    // 4. Remove [bezel_...] completely?? Or keep content?
    //    Looking at sample: [bezel_page_title title="..."] -> We might want the title.
    //    But extracting attributes with regex is hard.
    //    Simplest approach: Strip ALL [...] tags.
    //    This leaves the inner text/html.

    return content.replace(/\[\/?[\w_-]+.*?\]/g, '');
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
