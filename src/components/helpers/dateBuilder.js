export const dateBuilder = () => {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return now.toLocaleDateString("en-US", options);
}