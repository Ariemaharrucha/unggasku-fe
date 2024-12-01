import { useEffect, useState } from 'react';
import { getArtikelDokter } from '../services/api.get.artikeldokter';
import useUser from '../../../stores/useStore';

export const useGetArtikelDokter = () => {
    const { user } = useUser();
    const [artikel, setArtikel] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtikel = async () => {
            try {
                const response = await getArtikelDokter(user.id);

                if (response.data && Array.isArray(response.data)) {
                    setArtikel(response.data);
                } else {
                    console.warn("Expected `data` to be an array. Defaulting to empty array.");
                    setArtikel([]);
                }
            } catch (error) {
                console.error("Error fetching artikel:", error);
                setError(error.message || "Error fetching data");
            } finally {
                setIsLoading(false);
            }
        };

        fetchArtikel();
    }, [user]);

    return { artikel, isLoading, error };
};
