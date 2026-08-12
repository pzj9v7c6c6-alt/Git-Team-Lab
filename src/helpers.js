function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, '-');
}
export function formatPrice(price) {
    return `$${price}`;
}
module.exports = { slugify , formatPrice };