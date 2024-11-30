import axios from "axios";

export const createArtikelDokter = async (data) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/dokter/artikel`,
            data
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to add artikel.");
    }
}