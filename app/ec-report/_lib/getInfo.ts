export const getInfo  = async () => {
    try {
        const response = await fetch("https://edu.eclab.me/api/test", {
            method: "GET",
        })
        return await response.json();
    } catch (e) {
        console.error('error', e);
    }
}