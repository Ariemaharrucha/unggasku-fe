import { useState } from "react";
import { createArtikelDokter } from "../services/api.crud.artikeldokter";
import useUser from "../../../stores/useStore";

const useAddArtikelDokter = () => {
    const { user } = useUser(); 
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);  
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (value) => {
        setContent(value);
    };

    const onSubmit = async (data) => {
        if (!user || !user.id) {
            throw new Error("User tidak bisa menambahkan artikel")
        }

        try {
                setIsLoading(true);
                setError(null);
                setSuccessMessage(null);

                const formData = new FormData();
                formData.append("judul", data.judul);
                formData.append("author_name", data.author_name);
                formData.append("kategori", data.kategori);
                formData.append("konten", content);
                formData.append("image_artikel", data.image_artikel[0]);
                formData.append("tanggal", data.tanggal);
                formData.append("author_id", user.id); 
                formData.append("role", user.role);

                await createArtikelDokter(formData);

                setSuccessMessage("Artikel berhasil ditambahkan!");
                setContent("");
            } catch (err) {
                setError(err.message || "Gagal menambahkan artikel");
            } finally {
                setIsLoading(false);
            }
    };

    return {
        content,
        setContent,
        isLoading,
        error,
        successMessage,
        handleChange,
        onSubmit,
    };
};

export default useAddArtikelDokter;
