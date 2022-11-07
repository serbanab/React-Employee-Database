
const addEmployee = (payload) => {

    return {
        payload,
        type : "ADD",

    }
}

const sortName = (payload) => {

    return{
        type : "NAME_SORT",
        payload,

    }

}

const sortPrice = (payload) => {

    return {
        type : "PRICE_SORT",
        payload,
    }

}

const smallFilter = (payload) => {

    return {
        type : "FILTER_SMALL",
        payload
    }

}

const middleFilter = (payload) => {

    return {
        type : "FILTER_MIDDLE",
        payload
    }
}

const bigFilter = (payload) => {

    return {
        type : "FILTER_BIG",
        payload
    }
}

const resetList = () => {

    return{
        type : "RESET",
    }
}

export {
    addEmployee,
    sortName,
    sortPrice,
    smallFilter,
    middleFilter,
    bigFilter,
    resetList
}