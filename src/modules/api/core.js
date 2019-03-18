import axios from 'axios';
import { appConstants } from "../../appConstants";

let makeResponse = async (method, route, data, headers) => {
    let config = { headers },
        url = `${appConstants.SERVER_ADDR}${route}`,
        response = {};

    switch (method) {
        case appConstants.METHOD_POST:
            response = await axios.post(url, data, config);
            break;
    }

    return response.data;
};

let makePostRequest = (route, data) => {
    return makeResponse(appConstants.METHOD_POST, route, data)
};

export {
    makePostRequest
};
