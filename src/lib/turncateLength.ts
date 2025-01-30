export const truncateLength = (description: string, maxLength: number) => {
    return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
};
