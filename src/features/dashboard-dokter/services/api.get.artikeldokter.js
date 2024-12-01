import axios from "axios";

export const getArtikelDokter = async (author_id) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/dokter/artikel/${author_id}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching artikel:", error);
        throw new Error("Failed to fetch artikel.");
    }
}