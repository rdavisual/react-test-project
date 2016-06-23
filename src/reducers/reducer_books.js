import { LIST_ACTION, ADD_ACTION, DEL_ACTION, GETONE_ACTION } from '../actions/types';

const INITIAL_STATE = { all: [{name: 'La Biblia'}], post: null, book: {}};

export default function(state = INITIAL_STATE, action) {
    //console.log(action);
    switch (action.type) {
            case LIST_ACTION:
                //console.log(action);
                let data = [];
                for (var idBook in action.payload.data){
                    var book = action.payload.data[idBook];
                    book.id = idBook;
                    data.push(book);
                }
                return { ...state, all: data };

            case GETONE_ACTION:


                var book = action.payload.data;
                  console.log("llibre: "+book);
                return { ...state, book: book};


            default:
              //console.log("default");
                return state;
        }
}
