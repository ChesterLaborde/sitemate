export const capitalize = (text: string): string => {
    return text.replace(/\b\w/g, w => w.toUpperCase());
}