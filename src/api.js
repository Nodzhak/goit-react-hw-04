import axios from "axios";

const fetchImages = async (query, page) =>{
    const accessKey = 'tKjDxBPM9zI2mblnnPzr5nNB3Jty7-7C-NodRPxoVvA'
    const answerFromUnsplash = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${accessKey}`,
    {
      params: { query, page, per_page: 9, orientation: "landscape"},
    })
    return answerFromUnsplash.data
}

export default fetchImages