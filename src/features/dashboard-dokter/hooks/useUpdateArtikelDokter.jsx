import { useState, useEffect } from "react";
import { getArtikelDokterDetail, updateArtikel } from "../services/api.crud.artikeldokter";
import useUser from "../../../stores/useStore";
import { useForm } from "react-hook-form";

export const useUpdateArtikelDokter = (id) => {
    const { user } = useUser();
    const [content, setContent] = useState("");
    const [artikel, setArtikel] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    useEffect(() => {

        const fetchArtikel = async () => {
            setIsLoading(true);
            try {
                const response = await getArtikelDokterDetail(id);
                if (response.data && response.data.length > 0) {
                    const artikelData = response.data[0];
                    setArtikel(artikelData);
                    setContent(artikelData.konten);
    
                    const formattedDate = artikelData.tanggal
                        ? new Date(artikelData.tanggal).toISOString().split('T')[0]
                        : "";
    
                    reset({
                        judul: artikelData.judul || "",
                        author_name: artikelData.author_name || "",
                        kategori: artikelData.kategori || "",
                        tanggal: formattedDate,  
                        konten: artikelData.konten || "",
                        image_artikel: artikelData.image_artikel || null,
                    });
    
                    setImagePreview(artikelData.image_artikel);
                } else {
                    setError("Artikel tidak ditemukan");
                }
            } catch (err) {
                setError(err.message || "Terjadi kesalahan saat mengambil artikel.");
            } finally {
                setIsLoading(false);
            }
        };
    
        if (id) {
            fetchArtikel();
        } else {
            setError("ID artikel tidak valid.");
            setIsLoading(false);
        }
    }, [id, reset, user]);
    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    };

    const onSubmit = async (data) => {
        // const isConfirmed = window.confirm("Apakah Anda yakin ingin mengubah artikel ini?");
        // if (!isConfirmed) return;
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("judul", data.judul);
            formData.append("author_name", data.author_name);
            formData.append("kategori", data.kategori);
            formData.append("tanggal", data.tanggal);
            formData.append("konten", content);
            
            if (data.image_artikel && data.image_artikel[0]) {
                formData.append("image_artikel", data.image_artikel[0]);
            } else {
             if (artikel?.image_artikel) {
              formData.append("image_artikel", artikel.image_artikel);
             }
            }

            const response = await updateArtikel(id, formData);
            setSuccessMessage("Artikel berhasil diperbarui.");
            setArtikel(response.data);
            reset();
            // navigate("/dashboard/dokter/artikel");
        } catch (err) {
            setError(err.message || "Terjadi kesalahan saat memperbarui artikel.");
        } finally {
            setIsLoading(false);
        }
    };

    const onContentChange = (value) => {
        setContent(value);
    };

    return {
        artikel,
        isLoading,
        successMessage,
        error,
        imagePreview,
        register,
        handleSubmit,
        errors,
        reset,
        handleImageChange,
        onSubmit,
        content,
        onContentChange
    };
};
