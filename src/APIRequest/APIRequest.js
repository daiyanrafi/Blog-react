import axios from "axios";

const BaseURL = 'https://basic-blog.teamrabbil.com/api';

export async function postCategory() {
    let result = await axios.get(BaseURL + '/post-categories')
    if (result.status == 200) {
        return result.data
    } else {
        return []
    }
}


export async function latestPost() {
    let result = await axios.get(BaseURL + '/post-newest')
    if (result.status == 200) {
        return result.data
    } else {
        return []
    }
}


export async function postByCategory(id) {
    let result = await axios.get(BaseURL + '/post-list/'+id)
    if (result.status == 200) {
        return result.data
    } else {
        return []
    }
}


export async function postDetails(id) {
    let result = await axios.get(BaseURL + '/post-details/'+id)
    if (result.status == 200) {
        return result.data
    } else {
        return []
    }
}