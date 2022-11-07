const initialState = {
    employee : [],  
    unorderedList : [],
    nameSorted: [],
    priceSorted : [],
}

const Reducer = (state = initialState , action) => {

    console.log("Asta este state" , state);
    console.log("Date originale" , state.unorderedList);
   
    switch (action.type) {
        case "ADD":
            
            return {
                ...state,
                employee : [ ...state.employee , action.payload],
                unorderedList : [...state.employee , action.payload],
            };
    
        case "NAME_SORT":

            let vector = [] , nameSorted = [];
            
            if(action.payload === true){
                
                vector = state.employee.slice(0).sort((a,b) => {
                    return a[0][0].localeCompare(b[0][0]);                
                });

                nameSorted = state.unorderedList.slice(0).sort((a,b) => {
                    return a[0][0].localeCompare(b[0][0]);
                });
               
            }else{
               
                let id = 0 , auxId = 0;
                
                for(let i = 0 ; i < state.employee.length ; i++ ){
                        
                    state.employee.forEach(el => {
                        if(el[el.length - 1] === id){
                            vector.push(el);
                            id++;
                        }
                    });

                    if(id === auxId){
                        id++;
                        auxId = id;
                        i--;
                    }
                }
                nameSorted = [];
            }

            return {
                ...state,
                employee : vector,
                nameSorted : nameSorted,
                priceSorted : action.payload === true ? [] : state.priceSorted,
                }

        case "PRICE_SORT":

                let vector2 = [] , priceSorted = [];

                if(action.payload === true){

                    vector2 = state.employee.slice(0).sort((a,b) => {
                        if(Number(a[3])<Number(b[3])) return -1;
                    });

                    priceSorted = state.unorderedList.slice(0).sort((a,b) => {
                        if(Number(a[3])<Number(b[3])) return -1;
                    });

                }else{

                    let id = 0 , auxId = 0;
                
                    for(let i = 0 ; i < state.employee.length ; i++ ){
                        state.employee.forEach(el => {
                            if(el[el.length - 1] === id){
                                vector2.push(el);
                                id++;
                            }
                        });

                        if(id === auxId){
                            id++;
                            auxId = id;
                            i--;
                        }
                    }
                    priceSorted = [];
                }

            return {
                ...state,
                employee : vector2,
                priceSorted : priceSorted,
                nameSorted : action.payload === true ? [] : state.nameSorted,
            }

        case "FILTER_SMALL":

            let filterSmall;

            if(action.payload === true){

                filterSmall = state.unorderedList.filter(el => {
                    if(Number(el[3]) < 2500) return true
                });

            }else{

                if(state.nameSorted.length > 0 ){
                    filterSmall = state.nameSorted;
                }else if (state.priceSorted.length > 0){
                    filterSmall = state.priceSorted;
                }else{
                    filterSmall = state.unorderedList;
                }
            }

            return{
                ...state,
                employee : filterSmall,
            }
        
        case "FILTER_MIDDLE":

           let filterMiddle;

           if(action.payload === true){

                filterMiddle = state.unorderedList.filter(el => {
                    if(Number(el[3]) >= 2500 && Number(el[3] <= 4000 )) return true;
                });

                }else{

                    if(state.nameSorted.length > 0 ){
                        filterMiddle = state.nameSorted;
                    }else if (state.priceSorted.length > 0){
                        filterMiddle = state.priceSorted;
                    }else{
                        filterMiddle = state.unorderedList;
                    }
           }

            return{
                ...state,
                employee : filterMiddle,
            }

        case "FILTER_BIG":

            let filterBig;

            if(action.payload === true){

                filterBig = state.unorderedList.filter(el => {
                    if(Number(el[3]) > 4000) return true;
                });

            }else{
                if(state.nameSorted.length > 0 ){
                    filterBig = state.nameSorted;
                }else if (state.priceSorted.length > 0){
                    filterBig = state.priceSorted;
                }else{
                    filterBig = state.unorderedList;
                }
            }

            return{
                ...state,
                employee : filterBig,
            }

        case "RESET":

            return{
                ...state,
                employee : state.unorderedList,
                priceSorted: [],
                nameSorted: [],
            }


        default:
            return state;
    }
}

export default Reducer;

