import axios from "axios";

export const getQuiz = async(number_questions) => {
    return await axios.get(`https://opentdb.com/api.php?amount=${number_questions}`).then(response => {
        return response.data.results;
    }).catch(err => {
        console.log(err);
        return "Error 404 - No se ha podido conectar con el servicio."
    })
}