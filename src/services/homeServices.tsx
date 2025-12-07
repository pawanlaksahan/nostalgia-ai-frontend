import axios from "axios";

const baseUrl = import.meta.env.BASE_URL;

export const generate = async(formData : FormData) => {
    try
    {
        const response = await axios.post(
            baseUrl + "/api/nostalgia/generate", 
            formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response.data;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch (error)
    {
        return null;
    }
}