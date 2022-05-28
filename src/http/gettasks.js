import axios from "axios";


 // let tasksStore = []

export async function getTaskListFromApi() {


    try{
        let response = await axios.get('http://localhost:3000/tasksStore')
        return response.data
    }catch (e) {
        console.log(e)
    }

}


// getTaskListFromApi()






