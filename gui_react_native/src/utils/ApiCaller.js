import * as ApiUrl from '../containts/ApiUrl';

export default function callApi(endPoint, method = "GET", body) {
    return (
        fetch(`${ApiUrl.API_URL}${endPoint}`, {
            method: method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: body
        }).catch((error) => {
            console.log(error);
        }).then((response) => response.json())
    )
}