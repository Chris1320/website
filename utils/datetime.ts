/**
 * Check if a date string is valid
 *
 * @param dateString The date string to check
 * @returns True if the date string is valid, false otherwise
 */
export function isValidDate(dateString: string | undefined): boolean {
    if (!dateString) return false;
    const date = new Date(dateString);
    return !isNaN(date.getTime());
}

/**
 * Format a date string to "MMM YYYY" format
 *
 * @param dateString The date string to format
 * @returns The formatted date string
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
    });
}
